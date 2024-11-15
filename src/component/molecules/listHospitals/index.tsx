import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import { DummyHosp1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

interface ListHospitalsProps {
  type: string;
  name: string;
  address: string;
  pic?: ImageSourcePropType; // Optional image prop
}

const ListHospitals: React.FC<ListHospitalsProps> = ({ type, name, address, pic = DummyHosp1 }) => (
  <View style={styles.container}>
    <Image source={pic} style={styles.picture} />
    <View style={styles.info}>
      <Text style={styles.title}>{type}</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  info: {
    flex: 1, // Ensures text wraps nicely and uses available space
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});

export default ListHospitals;
