import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IlDokObat } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <IlDokObat style={styles.illustration}/>
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
