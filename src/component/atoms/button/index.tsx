import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';

// Define prop types for better type safety and clarity
interface ButtonProps {
  type: 'primary' | 'secondary';
  title: string;
}

const Button: React.FC<ButtonProps> = ({ type, title }) => (
  <View style={styles(type).container}>
    <Text style={styles(type).text}>{title}</Text>
  </View>
);

// Style function with type annotations for dynamic styling
const styles = (type: 'primary' | 'secondary') =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
      paddingVertical: 10,
      borderRadius: 10,
    } as ViewStyle,
    text: {
      fontSize: 16,
      fontWeight: '600' as TextStyle['fontWeight'],
      textAlign: 'center',
      color: type === 'secondary' ? 'black' : 'white',
    } as TextStyle,
  });

export default Button;
