import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Define prop types for better type safety and clarity
interface ButtonProps {
  type: 'primary' | 'secondary';
  title: string;
  onPress: () => void; // Corrected onPress type definition
}

const Button: React.FC<ButtonProps> = ({ type, title, onPress }) => (
  <TouchableOpacity style={styles(type).container} onPress={onPress}>
    <Text style={styles(type).text}>{title}</Text>
  </TouchableOpacity>
);

// Style function with type annotations for dynamic styling
const styles = (type: string | string) =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
      paddingVertical: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 16,
      fontFamily: 'Nunito-SemiBold',
      textAlign: 'center',
      color: type === 'secondary' ? 'black' : 'white',
    },
  });

export default Button;
