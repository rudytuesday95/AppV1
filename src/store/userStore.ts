import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, UserProfileState } from '../types/user';

const STORAGE_KEY = '@user_profile';
const ONBOARDING_KEY = '@onboarding_complete';

export const useUserStore = create<UserProfileState>((set, get) => ({
  profile: null,
  isOnboardingComplete: false,

  setProfile: async (profile: UserProfile) => {
    set({ profile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  },

  updateProfile: async (updates: Partial<UserProfile>) => {
    const currentProfile = get().profile;
    if (!currentProfile) return;

    const updatedProfile: UserProfile = {
      ...currentProfile,
      ...updates,
      lastUpdated: new Date(),
    };

    set({ profile: updatedProfile });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  },

  completeOnboarding: async () => {
    set({ isOnboardingComplete: true });
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
  },

  resetProfile: async () => {
    set({ profile: null, isOnboardingComplete: false });
    await AsyncStorage.removeItem(STORAGE_KEY);
    await AsyncStorage.removeItem(ONBOARDING_KEY);
  },

  // Load profile from storage on app start
  loadProfile: async () => {
    try {
      const [profileData, onboardingData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEY),
        AsyncStorage.getItem(ONBOARDING_KEY),
      ]);

      if (profileData) {
        const profile = JSON.parse(profileData);
        // Convert date strings back to Date objects
        profile.createdAt = new Date(profile.createdAt);
        profile.lastUpdated = new Date(profile.lastUpdated);
        set({ profile });
      }

      if (onboardingData === 'true') {
        set({ isOnboardingComplete: true });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },
}));

