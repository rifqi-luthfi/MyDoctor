import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlLogo } from '../../assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Constants for better scalability and maintainability
const COLORS = {
  primaryText: '#112340',
  background: 'white',
};

const STRINGS = {
  title: 'My Doctor',
};

// TypeScript types for navigation
type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
};

type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

type SplashProps = {
  navigation: SplashNavigationProp;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted'); // Navigate to 'GetStarted' after 3 seconds
    }, 3000);
  }, [navigation]);

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
    color: COLORS.primaryText,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default Splash;