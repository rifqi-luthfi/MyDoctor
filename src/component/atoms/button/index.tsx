import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonType, colors, fonts, IconType } from '../../../utils';
import IconOnly from './iconOnly';
import BtnIconSend from './btnIconSend';

// Define prop types for better type safety and clarity
interface ButtonProps {
  type: ButtonType;
  title?: string;
  onPress: () => void;
  icon?: IconType;
  visible?: boolean;  // Use only the visible prop to control button visibility
}

const Button: React.FC<ButtonProps> = ({ type, title, onPress, icon = 'back-dark', visible = true }) => {
  const buttonStyle = styles(type);

  if (type === 'btn-icon-send') {
    return <BtnIconSend onPress={onPress} visible={visible} />;
  }

  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon}/>;
  }

  return (
    <TouchableOpacity
      style={[
        buttonStyle.container,
        { opacity: visible ? 1 : 0.5 },  // Reduce opacity if not visible
      ]}
      onPress={visible ? onPress : undefined}  // Disable press if not visible
      activeOpacity={0.7}
    >
      <Text style={buttonStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Style function with type annotations for dynamic styling
const styles = (type: ButtonType) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        type === 'secondary'
          ? colors.button.secondary.background
          : colors.button.primary.background,
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
