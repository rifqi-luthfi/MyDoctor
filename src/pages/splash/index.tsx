import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlLogo } from '../../assets';

// Constants for better scalability and maintainability
const COLORS = {
  primaryText: '#112340',
  background: 'white',
};

const STRINGS = {
    title: 'My Doctor',
};

// TypeScript types for future scalability
type SplashProps = {};

const Splash: React.FC<SplashProps> = () => {
  return (
    <View style={styles.page}>
      <IlLogo />
      <Text style={styles.title}> {STRINGS.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.primaryText,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Splash;
