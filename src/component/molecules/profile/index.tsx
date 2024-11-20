import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyUser, IcRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Profile({name, desc}) {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar}/>
        <IcRemovePhoto style={styles.removePhoto}/>
      </View>
      {
        name && (
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.job}>{desc}</Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  job: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
