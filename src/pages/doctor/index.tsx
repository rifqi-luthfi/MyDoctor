import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.container}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top rated Doctor</Text>
      <RatedDoctor />
      <Text>Good news</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
});
