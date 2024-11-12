import React from 'react';
import { Text, TextStyle, View } from 'react-native';

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
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
};

export default Link;