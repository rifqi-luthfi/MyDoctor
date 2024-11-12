import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { colors, fonts, TextAlign } from '../../../utils';

interface LinkProps {
  title: string;
  size?: number;
  align?: TextAlign; // Restrict align to valid values
}

const Link: React.FC<LinkProps> = ({ title, size = 14, align = 'left' }) => { // Default align to 'left'
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
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
