import React from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...textInputProps }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular', // Corrected fontFamily spelling
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 12, // Added padding for better user experience
  },
});

export default Input;
