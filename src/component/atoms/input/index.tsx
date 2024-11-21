import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';

interface InputProps {
  label: string;
  value: string; // value of the TextInput
  onChangeText: (text: string) => void; // function to handle text change
  secureTextEntry?: boolean
}

const Input: React.FC<InputProps> = ({ label, value, onChangeText, secureTextEntry = false }) => {
  const [border, setBorder] = useState(colors.border);

  // Handler for focus event
  const handleFocus = () => {
    setBorder(colors.tertiary);
  };

  // Handler for blur event
  const handleBlur = () => {
    setBorder(colors.border); // Reset the border color on blur
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, { borderColor: border }]} // Inline style for borderColor
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
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
    padding: 12, // Added padding for better user experience
  },
});

export default Input;
