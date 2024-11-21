import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, RootStackParamList } from '../../utils';

// Define the navigation prop type
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UploadPhoto'>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => {
      const updatedForm = { ...prevState, [name]: value };
      checkFormValidity(updatedForm);
      return updatedForm;
    });
  };

  // Validate the form data
  const checkFormValidity = (data: typeof formData) => {
    const isValid =
      data.fullName.trim() !== '' &&
      data.job.trim() !== '' &&
      /\S+@\S+\.\S+/.test(data.email) && // Basic email validation
      data.password.length >= 6; // Basic password length validation
    setIsFormValid(isValid);
  };

  // Handle the continue button press
  const handleContinuePress = () => {
    console.log(formData);
    // navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.page}>
      <Header onPress={handleBackPress} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={formData.fullName}
            onChangeText={(value) => handleInputChange('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Job"
            value={formData.job}
            onChangeText={(value) => handleInputChange('job', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
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
