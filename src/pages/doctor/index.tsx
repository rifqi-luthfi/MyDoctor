import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component';

export default function Doctor() {
  return (
    <View>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
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

const styles = StyleSheet.create({});
