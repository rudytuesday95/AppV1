import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Workout, Set, Progress } from '../types/exercise';

interface WorkoutState {
  currentWorkout: Workout | null;
  workoutHistory: Workout[];
  progress: Record<string, Progress>; // exerciseId -> Progress

  // Current workout actions
  startWorkout: (name?: string, planId?: string) => void;
  addExercise: (exerciseId: string) => void;
  addSet: (exerciseId: string, set: Omit<Set, 'id' | 'completedAt'>) => void;
  updateSet: (exerciseId: string, setId: string, updates: Partial<Set>) => void;
  completeSet: (exerciseId: string, setId: string) => void;
  completeWorkout: () => Promise<void>;

  // History actions
  loadWorkoutHistory: () => Promise<void>;
  getWorkoutById: (id: string) => Workout | undefined;

  // Progress actions
  updateProgress: (exerciseId: string, progress: Partial<Progress>) => void;
  loadProgress: () => Promise<void>;
}

const WORKOUT_HISTORY_KEY = '@workout_history';
const PROGRESS_KEY = '@progress';

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  currentWorkout: null,
  workoutHistory: [],
  progress: {},

  startWorkout: (name, planId) => {
    const workout: Workout = {
      id: `workout_${Date.now()}`,
      name,
      exercises: [],
      startedAt: new Date(),
      planId,
    };
    set({ currentWorkout: workout });
  },

  addExercise: (exerciseId) => {
    const currentWorkout = get().currentWorkout;
    if (!currentWorkout) return;

    const updatedWorkout: Workout = {
      ...currentWorkout,
      exercises: [
        ...currentWorkout.exercises,
        {
          exerciseId,
          sets: [],
        },
      ],
    };
    set({ currentWorkout: updatedWorkout });
  },

  addSet: (exerciseId, setData) => {
    const currentWorkout = get().currentWorkout;
    if (!currentWorkout) return;

    const setId = `set_${Date.now()}_${Math.random()}`;
    const newSet: Set = {
      ...setData,
      id: setId,
      completed: false,
    };

    const updatedWorkout: Workout = {
      ...currentWorkout,
      exercises: currentWorkout.exercises.map((ex) =>
        ex.exerciseId === exerciseId
          ? { ...ex, sets: [...ex.sets, newSet] }
          : ex
      ),
    };
    set({ currentWorkout: updatedWorkout });
  },

  updateSet: (exerciseId, setId, updates) => {
    const currentWorkout = get().currentWorkout;
    if (!currentWorkout) return;

    const updatedWorkout: Workout = {
      ...currentWorkout,
      exercises: currentWorkout.exercises.map((ex) =>
        ex.exerciseId === exerciseId
          ? {
              ...ex,
              sets: ex.sets.map((s) =>
                s.id === setId ? { ...s, ...updates } : s
              ),
            }
          : ex
      ),
    };
    set({ currentWorkout: updatedWorkout });
  },

  completeSet: (exerciseId, setId) => {
    const currentWorkout = get().currentWorkout;
    if (!currentWorkout) return;

    const updatedWorkout: Workout = {
      ...currentWorkout,
      exercises: currentWorkout.exercises.map((ex) =>
        ex.exerciseId === exerciseId
          ? {
              ...ex,
              sets: ex.sets.map((s) =>
                s.id === setId
                  ? { ...s, completed: true, completedAt: new Date() }
                  : s
              ),
            }
          : ex
      ),
    };
    set({ currentWorkout: updatedWorkout });
  },

  completeWorkout: async () => {
    const currentWorkout = get().currentWorkout;
    if (!currentWorkout) return;

    const completedWorkout: Workout = {
      ...currentWorkout,
      completedAt: new Date(),
      duration: Math.round(
        (new Date().getTime() - currentWorkout.startedAt.getTime()) / 60000
      ),
    };

    // Add to history
    const history = [...get().workoutHistory, completedWorkout];
    set({ workoutHistory: history, currentWorkout: null });

    // Save to storage
    await AsyncStorage.setItem(WORKOUT_HISTORY_KEY, JSON.stringify(history));

    // Update progress for each exercise
    const progress = { ...get().progress };
    completedWorkout.exercises.forEach((ex) => {
      ex.sets.forEach((set) => {
        if (set.completed && set.weight && set.reps) {
          const exerciseProgress = progress[ex.exerciseId] || {
            exerciseId: ex.exerciseId,
            totalWorkouts: 0,
          };

          const volume = set.weight * set.reps;
          const isPR =
            !exerciseProgress.personalRecord ||
            set.weight > exerciseProgress.personalRecord.weight ||
            (set.weight === exerciseProgress.personalRecord.weight &&
              set.reps > exerciseProgress.personalRecord.reps);

          if (isPR) {
            exerciseProgress.personalRecord = {
              weight: set.weight,
              reps: set.reps,
              date: set.completedAt || new Date(),
            };
          }

          const totalVolume = ex.sets.reduce(
            (sum, s) => sum + (s.completed ? s.weight * s.reps : 0),
            0
          );
          const isVolumePR =
            !exerciseProgress.volumePR ||
            totalVolume > exerciseProgress.volumePR.volume;

          if (isVolumePR) {
            exerciseProgress.volumePR = {
              volume: totalVolume,
              date: completedWorkout.completedAt || new Date(),
            };
          }

          exerciseProgress.lastWorkout = completedWorkout.completedAt;
          exerciseProgress.totalWorkouts += 1;

          progress[ex.exerciseId] = exerciseProgress;
        }
      });
    });

    set({ progress });
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  },

  loadWorkoutHistory: async () => {
    try {
      const data = await AsyncStorage.getItem(WORKOUT_HISTORY_KEY);
      if (data) {
        const history = JSON.parse(data);
        // Convert date strings back to Date objects
        history.forEach((w: Workout) => {
          w.startedAt = new Date(w.startedAt);
          if (w.completedAt) w.completedAt = new Date(w.completedAt);
        });
        set({ workoutHistory: history });
      }
    } catch (error) {
      console.error('Error loading workout history:', error);
    }
  },

  getWorkoutById: (id) => {
    return get().workoutHistory.find((w) => w.id === id);
  },

  updateProgress: (exerciseId, progressUpdates) => {
    const progress = { ...get().progress };
    progress[exerciseId] = {
      ...(progress[exerciseId] || { exerciseId, totalWorkouts: 0 }),
      ...progressUpdates,
    };
    set({ progress });
  },

  loadProgress: async () => {
    try {
      const data = await AsyncStorage.getItem(PROGRESS_KEY);
      if (data) {
        const progress = JSON.parse(data);
        // Convert date strings back to Date objects
        Object.values(progress).forEach((p: Progress) => {
          if (p.personalRecord) {
            p.personalRecord.date = new Date(p.personalRecord.date);
          }
          if (p.volumePR) {
            p.volumePR.date = new Date(p.volumePR.date);
          }
          if (p.lastWorkout) {
            p.lastWorkout = new Date(p.lastWorkout);
          }
        });
        set({ progress });
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  },
}));

