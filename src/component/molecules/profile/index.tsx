import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { DummyUser, IcRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({ name = '', desc = '', isRemove = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        {isRemove && <IcRemovePhoto style={styles.removePhoto} />}
      </View>
      {name ? (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      ) : null}
    </View>
  );
};

// Prop Types for validation
Profile.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  isRemove: PropTypes.bool,
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55, // Simplified calculation
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 65,
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
