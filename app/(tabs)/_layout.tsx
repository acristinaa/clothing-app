import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Colors } from '@/constants/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.white,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.light.darkPurple,
          },
          headerTintColor: 'white',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor: Colors.light.darkPurple,
            },
            default: {
              backgroundColor: Colors.light.darkPurple,
            },
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Clothing Swipe',
            tabBarIcon: ({ color }) => <Octicons name="home" size={24} color="white" />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Explore',
            headerTitle: 'Explore Outfits',
            tabBarIcon: ({ color }) => <Feather name="settings" size={24} color="white" />,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.light.darkPurple,
  },
});

