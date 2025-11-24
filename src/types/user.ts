export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type Goal = 
  | 'strength' 
  | 'hypertrophy' 
  | 'endurance' 
  | 'weight_loss' 
  | 'general_fitness' 
  | 'athletic_performance';

export type Equipment =
  | 'barbell'
  | 'dumbbells'
  | 'kettlebell'
  | 'resistance_bands'
  | 'cable_machine'
  | 'smith_machine'
  | 'pull_up_bar'
  | 'dip_station'
  | 'bench'
  | 'squat_rack'
  | 'cardio_machines'
  | 'bodyweight_only'
  | 'full_gym';

export type InjurySeverity = 'mild' | 'moderate' | 'severe';

export interface Injury {
  bodyPart: string;
  severity: InjurySeverity;
  notes?: string;
}

export interface UserProfile {
  // Experience & Level
  yearsOfExperience: number;
  experienceLevel: ExperienceLevel;

  // Goals (multi-select)
  goals: Goal[];

  // Preferences
  likedExercises: string[]; // Exercise IDs
  dislikedExercises: string[]; // Exercise IDs

  // Limitations
  injuries: Injury[];

  // Equipment
  availableEquipment: Equipment[];

  // Metadata
  createdAt: Date;
  lastUpdated: Date;
}

export interface UserProfileState {
  profile: UserProfile | null;
  isOnboardingComplete: boolean;
  setProfile: (profile: UserProfile) => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  completeOnboarding: () => Promise<void>;
  resetProfile: () => Promise<void>;
  loadProfile: () => Promise<void>;
}

