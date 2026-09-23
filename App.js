import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppProvider } from './src/context/AppContext';
import POSScreen from './src/screens/POSScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: colors.accent,
              tabBarInactiveTintColor: colors.inkMuted,
              tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
            }}
          >
            <Tab.Screen name="Billing" component={POSScreen} />
            <Tab.Screen name="Inventory" component={InventoryScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </AppProvider>
    </SafeAreaProvider>
  );
}
