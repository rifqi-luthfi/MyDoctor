import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IlLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import { colors, fonts } from '../../utils';
import { RootStackParamList } from '../../utils';

// Define type for navigation
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const handleContinuePress = () => navigation.replace('MainApp');
  const handleRegisterPress = () => navigation.navigate('Register');

  return (
    <View style={styles.page}>
      <IlLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" secureTextEntry />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} onPress={() => {}}/>
      <Gap height={40} />
      <Button type="primary" title="Login" onPress={handleContinuePress} />
      <Gap height={30} />
      <Link title="Create My Account" size={16} align="center" onPress={handleRegisterPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginVertical: 40,
    maxWidth: 200, // Adjusted to improve text wrapping
    textAlign: 'center',
  },
});

export default Login;
