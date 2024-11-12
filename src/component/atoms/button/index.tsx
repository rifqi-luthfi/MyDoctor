import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonType, colors, fonts, IconType } from '../../../utils';
import IconOnly from './iconOnly';

// Define prop types for better type safety and clarity
interface ButtonProps {
  type: ButtonType;
  title?: string;
  onPress: () => void;
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({ type, title, onPress, icon = 'back-dark'}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon}/>;
  }

  return (
    <TouchableOpacity style={styles(type).container} onPress={onPress}>
      <Text style={styles(type).text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Style function with type annotations for dynamic styling
const styles = (type: 'primary' | 'secondary' | 'icon-only') =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
      paddingVertical: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 16,
      fontFamily: fonts.primary[600],
      textAlign: 'center',
      color: type === 'secondary' ? colors.black : colors.white,
    },
  });

export default Button;
