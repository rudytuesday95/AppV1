export type PlanLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type ProgressionType = 'linear' | 'undulating' | 'block';

export interface PlanExercise {
  exerciseId: string;
  sets: number | 'auto'; // 'auto' means algorithm determines
  reps: number | 'auto' | string; // Can be range like "8-12"
  restPeriod: number; // seconds
  notes?: string;
}

export interface PlanWorkout {
  dayNumber: number;
  name: string; // e.g., "Push Day", "Pull Day"
  exercises: PlanExercise[];
}

export interface PlanWeek {
  weekNumber: number;
  focus: string; // e.g., "hypertrophy", "strength", "deload"
  workouts: PlanWorkout[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  level: PlanLevel;
  duration: number; // weeks
  frequency: number; // workouts per week
  description: string;
  weeks: PlanWeek[];
  progression: {
    type: ProgressionType;
    rules: string; // Description of how plan progresses
  };
  requirements: {
    equipment: string[]; // Required equipment
    timePerWorkout: number; // minutes
    daysPerWeek: number;
  };
}

export interface ActivePlan {
  planId: string;
  startedAt: Date;
  currentWeek: number;
  currentDay: number;
  completedWorkouts: string[]; // Workout IDs
}

