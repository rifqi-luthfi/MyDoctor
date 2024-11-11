import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Login, Register, Splash } from '../pages';

// Create a Native Stack Navigator with types
const Stack = createNativeStackNavigator();

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
        options={{ headerShown: false }} // Remove header from GetStarted screen
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Remove header from GetStarted screen
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }} // Remove header from GetStarted screen
      />
    </Stack.Navigator>
  );
};

export default Router;
