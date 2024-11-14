import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyHosp1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListHospitals() {
  return (
    <View style={styles.container}>
        <Image source={DummyHosp1} style={styles.picture}/>
        <View>
            <Text style={styles.title}>Rumah Sakit</Text>
            <Text style={styles.title}>Citra Bunga Merdeka</Text>
            <Text style={styles.address}>Jln. Surya sejahtera 20</Text>
        </View>
    </View>
  );
}

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
