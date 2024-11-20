import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { DummyDoc2, IcEditLanguage, IcEditProfile, IcGiveRate, IcHelpCenter, IcNext } from '../../../assets';
import { colors, fonts } from '../../../utils';

interface ListProps {
  profile?: ImageSourcePropType;
  name: string;
  desc: string;
  type?: 'next' | 'none'; // Restrict `type` to specific values
  onPress: () => void;
  icon?: string;
}

const List: React.FC<ListProps> = ({
  profile = DummyDoc2,
  name,
  desc,
  type = 'none',
  onPress,
  icon,
}) => {
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'edit-profile':
        return <IcEditProfile />;
      case 'language':
        return <IcEditLanguage />;
      case 'rate':
        return <IcGiveRate />;
      case 'help':
        return <IcHelpCenter />;
      default:
        return null; // No icon for default case
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* If icon is passed, render it; otherwise, render the profile image */}
      {icon ? renderIcon(icon) : <Image source={profile} style={styles.avatar} />}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IcNext />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 4,
  },
});

export default List;
