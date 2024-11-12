import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { colors } from '../../../utils';

interface LinkProps {
  title: string;
  size?: number;
  align?: 'left' | 'right' | 'center' | 'justify'; // Restrict align to valid values
}

const Link: React.FC<LinkProps> = ({ title, size = 14, align = 'left' }) => { // Default align to 'left'
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
};

const styles = {
  text: (size: number, align: 'left' | 'right' | 'center' | 'justify'): TextStyle => ({
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
};

export default Link;
