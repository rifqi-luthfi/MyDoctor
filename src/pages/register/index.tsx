import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, RootStackParamList } from '../../utils';

// Define the navigation prop type
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Handle the continue button press
  const handleContinuePress = () => {
    // Add logic here for what happens when the user presses "Continue"
    console.log('Continue pressed');
  };

  return (
    <View style={styles.page}>
      <Header onPress={handleBackPress} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Job" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button type="primary" title="Continue" onPress={handleContinuePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});

export default Register;
