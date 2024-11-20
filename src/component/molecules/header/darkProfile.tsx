import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoc6 } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';



interface HeaderProps {
  title: string;
  type?: 'dark' | 'light' | 'dark-profile'; // Restrict type to specific string values
  category: string,
}

const DarkProfile: React.FC<HeaderProps> = ({title, type = 'light', category}) => {
  const containerStyle = [
    styles.container,
    {
      backgroundColor: type === 'dark' ? colors.secondary : colors.white,
      borderBottomLeftRadius: type === 'dark' ? 20 : 0,
      borderBottomRightRadius: type === 'dark' ? 20 : 0,
    },
  ];

  const textStyle = [
    styles.name,
    { color: type === 'dark' ? colors.white : colors.secondary },
  ];

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={containerStyle}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={handleBackPress}
      />
      <View style={styles.content}>
        <Text style={textStyle}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Image source={DummyDoc6} style={styles.avatar}/>
      <Gap width={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center', // Ensures items align vertically in the center
  },
  content: {
    flex: 1,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  category: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    marginTop: 6,
    color: colors.text.subTitle,
  },
});

export default DarkProfile;
