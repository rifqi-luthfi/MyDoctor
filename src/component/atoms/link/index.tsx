import React from 'react';
import { Text, TextStyle, TouchableOpacity } from 'react-native';
import { colors, fonts, TextAlign } from '../../../utils';

interface LinkProps {
  title: string;
  size?: number;
  align?: TextAlign; // Restrict align to valid values
  onPress: () => void; // Explicitly define onPress as required
}

const Link: React.FC<LinkProps> = ({ title, size = 14, align = 'left', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  text: (size: number, align: TextAlign): TextStyle => ({
    fontSize: size,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
};

export default Link;
