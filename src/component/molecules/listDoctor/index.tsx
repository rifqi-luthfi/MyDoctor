import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import { DummyDoc2 } from '../../../assets';
import { colors, fonts } from '../../../utils';

interface ListDoctorProps {
  profile?: ImageSourcePropType;
  name: string;
  desc: string;
}

const ListDoctor: React.FC<ListDoctorProps> = ({ profile = DummyDoc2, name, desc }) => (
  <View style={styles.container}>
    <Image source={profile} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  </View>
);

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
    borderRadius: 23, // Half of width/height for circular shape
    marginRight: 12,
  },
  textContainer: {
    flex: 1, // Ensures text wraps within available space
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
    marginTop: 4, // Small spacing between name and description
  },
});

export default ListDoctor;
