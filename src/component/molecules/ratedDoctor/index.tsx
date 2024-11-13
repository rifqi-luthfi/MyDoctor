import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyDoc1, IcStarRate } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoc1} style={styles.avatar}/>
      <View style={styles.profile}>
        <Text style={styles.name}>Kenzie nararya</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IcStarRate />
        <IcStarRate />
        <IcStarRate />
        <IcStarRate />
        <IcStarRate />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
  },
});
