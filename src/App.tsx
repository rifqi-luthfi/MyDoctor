import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils';


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
