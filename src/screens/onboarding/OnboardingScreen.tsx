import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useUserStore } from '../../store/userStore';

export default function OnboardingScreen() {
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Workout Tracker</Text>
        <Text style={styles.subtitle}>
          Let's set up your profile to get personalized workout recommendations.
        </Text>
        <Text style={styles.placeholder}>
          Onboarding flow will be built here
        </Text>
        {/* Temporary button to skip onboarding for now */}
        <Text
          style={styles.skipButton}
          onPress={() => completeOnboarding()}
        >
          Skip for now (temporary)
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  skipButton: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

