import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Colors } from '@/constants/Colors';

import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/build/Entypo';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.white,
          tabBarInactiveTintColor: Colors.light.white,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.light.darkGreen,
          },  
          headerTintColor: 'white',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor: Colors.light.darkGreen,
            },
            default: {
              backgroundColor: Colors.light.darkGreen,
            },
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Profile',
            headerTitle: 'mavazi',
            tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color="white" />,
          }}
        />
        <Tabs.Screen 
        name="swipe-page"
        options={{
          title: 'Swipe',
          headerTitle: 'swipe',
          tabBarIcon: ({ color }) => <Entypo name="cycle" size={24} color="white" />,
        }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: 'Chats',
            headerTitle: 'chats',
            tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color="white" />,
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

