import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DummyUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

interface HomeProfileProps {
  onPress: () => void; // Explicitly define the type for onPress
}

const HomeProfile: React.FC<HomeProfileProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>Rifqi Luthfi</Text>
        <Text style={styles.job}>Android Developer</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Ensures proper vertical alignment
    padding: 12, // Add padding for a clickable area
    backgroundColor: colors.white, // Optional background color
    borderRadius: 8, // Rounded edges for a card-like appearance
    shadowColor: colors.black, // Shadow for iOS
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 4,
    elevation: 1, // Shadow for Android
  },
  content: {
    justifyContent: 'center', // Centers the text vertically
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23, // Circular avatar
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4, // Add spacing between name and job
  },
});

export default HomeProfile;
