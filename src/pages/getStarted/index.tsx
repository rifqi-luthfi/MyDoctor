import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { IlGetStarted, IlLogo } from '../../assets';
import { Button, Gap } from '../../component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, fonts, RootStackParamList } from '../../utils';
import Config from 'react-native-config';


// Define the navigation prop type
type GetStartedScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface GetStartedProps {
  navigation: GetStartedScreenNavigationProp;
}

const strings = {
  title: 'Konsultasi dengan dokter jadi lebih mudah & fleksibel',
  getStartedButton: 'Get Started',
  signInButton: 'Sign In',
};

const GetStarted: React.FC<GetStartedProps> = ({ navigation }) => {

  const handleGetStartedPress = () => {
    navigation.navigate('Register');
  };

  const handleSignInPress = () => {
    navigation.replace('Login');
  };

  return (
    <ImageBackground source={IlGetStarted} style={styles.page}>
      <Text>
        _**ENVIROMENT:{Config.ENV}**_
      </Text>
      <View>
        <IlLogo />
        <Text style={styles.title}>{strings.title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          title={strings.getStartedButton}
          onPress={handleGetStartedPress}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title={strings.signInButton}
          onPress={handleSignInPress}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    lineHeight: 36,
    fontFamily: fonts.primary[600],
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
});

export default GetStarted;
