export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'legs'
  | 'glutes'
  | 'hamstrings'
  | 'quadriceps'
  | 'calves'
  | 'abs'
  | 'forearms'
  | 'cardio'
  | 'full_body';

export interface Exercise {
  id: string;
  name: string;
  muscleGroups: MuscleGroup[];
  equipment: string[]; // Equipment types needed
  thumbnailImage?: string; // URL or local path
  images?: string[]; // Multiple angles
  video?: string; // URL or local path
  instructions: string[];
  tips?: string[];
  commonMistakes?: string[];
  defaultSets: number;
  defaultReps: number | string; // Can be a range like "8-12"
  restPeriod: number; // seconds
}

export interface Set {
  id: string;
  exerciseId: string;
  weight: number; // in lbs or kg
  reps: number;
  rpe?: number; // Rate of Perceived Exertion (1-10)
  restTime?: number; // actual rest time taken
  notes?: string;
  completed: boolean;
  completedAt?: Date;
}

export interface Workout {
  id: string;
  name?: string;
  exercises: {
    exerciseId: string;
    sets: Set[];
    notes?: string;
  }[];
  startedAt: Date;
  completedAt?: Date;
  duration?: number; // in minutes
  planId?: string; // If part of a workout plan
  planWeek?: number;
  planDay?: number;
}

export interface Progress {
  exerciseId: string;
  personalRecord?: {
    weight: number;
    reps: number;
    date: Date;
  };
  volumePR?: {
    volume: number; // total volume (weight * reps * sets)
    date: Date;
  };
  lastWorkout?: Date;
  totalWorkouts: number;
  averageWeight?: number;
  averageReps?: number;
}

