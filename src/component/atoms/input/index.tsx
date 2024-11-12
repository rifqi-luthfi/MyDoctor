import React from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';
import { colors, fonts } from '../../../utils';

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
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400], // Corrected fontFamily spelling
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12, // Added padding for better user experience
  },
});

export default Input;
