import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DummyHosp1, DummyHosp2, DummyHosp3, IlHosp } from '../../assets';
import { colors, fonts } from '../../utils';
import { ListHospitals } from '../../component';

export default function Hospitals() {
  return (
    <View style={styles.container}>
      <ImageBackground source={IlHosp} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
      <ListHospitals
        type="General Hospital"
        name="City Health Center"
        address="123 Health Street, Cityville"
        pic={DummyHosp1}
      />
      <ListHospitals
        type="Specialist Hospital"
        name="Advanced Care Clinic"
        address="456 Wellness Ave, Metro Town"
        pic={DummyHosp2}
      />
      <ListHospitals
        type="Children's Hospital"
        name="Pediatric Hospital"
        address="789 Kids Lane, Childsville"
        pic={DummyHosp3}
      />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 16,
  },
});
