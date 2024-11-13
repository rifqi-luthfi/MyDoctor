import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../component';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16}/>
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6}/>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}>Top rated Doctor</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.sectionLabel}>Good news</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom:16,
  },
});
