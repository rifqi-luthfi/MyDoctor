import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, RegisterPayload, RootStackParamList, useForm } from '../../utils';
import axios from 'axios';
import { useRegisterUser } from '../../service';
import { SubmitHandler } from 'react-hook-form';

// Define the navigation prop type
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UploadPhoto'>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {

  const createRegistrationMutation = useRegisterUser();

  // Use the custom hook for form state management
   const [formData, updateFormData] = useForm<RegisterPayload>({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.job.trim() !== '' &&
    /\S+@\S+\.\S+/.test(formData.email) && // Basic email validation
    formData.password.length >= 6; // Basic password length validation

  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Handle the continue button press
  const handleContinuePress = () => {
    if (isFormValid) {
      createRegistrationMutation.mutate(formData, {
        onSuccess: (response) => {
          console.log('Registration successful:', response);
          navigation.navigate('UploadPhoto'); // Navigate on success
        },
        onError: (error) => {
          console.error('Registration failed:', error);
        },
      });
    } else {
      console.error('Form validation failed.');
    }
  };

  return (
    <View style={styles.page}>
      <Header onPress={handleBackPress} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={formData.fullName}
            onChangeText={(value) => updateFormData({ fullName: value })}
          />
          <Gap height={24} />
          <Input
            label="Job"
            value={formData.job}
            onChangeText={(value) => updateFormData({ job: value })}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={formData.email}
            onChangeText={(value) => updateFormData({ email: value })}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={formData.password}
            onChangeText={(value) => updateFormData({ password: value })}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button
            type="primary"
            title="Continue"
            onPress={handleContinuePress}
            visible={isFormValid} // Disable button if form is invalid
          />
        </ScrollView>
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
