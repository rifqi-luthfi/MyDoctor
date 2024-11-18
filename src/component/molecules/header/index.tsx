import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

interface HeaderProps {
  onPress: () => void;
  title: string;
  type?: 'dark' | 'light'; // Restrict type to specific string values
}

const Header: React.FC<HeaderProps> = ({ onPress, title, type = 'light' }) => {
  const containerStyle = [
    styles.container,
    {
      backgroundColor: type === 'dark' ? colors.secondary : colors.white,
      borderBottomLeftRadius: type === 'dark' ? 20 : 0,
      borderBottomRightRadius: type === 'dark' ? 20 : 0,
    },
  ];

  const textStyle = [
    styles.text,
    { color: type === 'dark' ? colors.white : colors.secondary },
  ];

  return (
    <View style={containerStyle}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={textStyle}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center', // Ensures items align vertically in the center
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
});

export default Header;
