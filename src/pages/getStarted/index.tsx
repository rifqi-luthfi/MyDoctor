import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { IlGetStarted, IlLogo } from '../../assets';
import { Button, Gap } from '../../component';

const strings = {
    title: 'Konsultasi dengan dokter jadi lebih mudah & fleksibel',
    getStartedButton: 'Get Started',
    signInButton: 'Sign In',
  };

const GetStarted: React.FC = () => {
  return (
    <ImageBackground source={IlGetStarted} style={styles.page}>
      <View>
        <IlLogo />
        <Text style={styles.title}> {strings.title} </Text>
      </View>
      <View>
        <Button type="primary" title= {strings.getStartedButton} />
        <Gap height={16}/>
        <Button type="secondary" title= {strings.signInButton} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    lineHeight: 36,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default GetStarted;
