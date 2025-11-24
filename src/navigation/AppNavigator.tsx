import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../store/userStore';

// Screens (we'll create these next)
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  // More screens will be added as we build them
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { isOnboardingComplete, loadProfile } = useUserStore();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Load user profile on app start
    loadProfile().then(() => {
      setIsLoading(false);
    });
  }, [loadProfile]);

  if (isLoading) {
    // You can add a loading screen here later
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isOnboardingComplete ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

