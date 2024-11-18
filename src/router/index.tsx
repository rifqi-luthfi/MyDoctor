import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Doctor, GetStarted, Hospitals, Login, Messages, Register, SelectDoctor, Splash, UploadPhoto } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../component';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// Create a Native Stack Navigator with types
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const renderMyTabBar = (props: BottomTabBarProps) => <BottomNavigator {...props} />;

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={renderMyTabBar}>
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{ headerShown: false }}/>
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}/>
      <Tab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }} // Remove header from Splash screen
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectDoctor"
        component={SelectDoctor}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
