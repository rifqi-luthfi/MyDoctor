import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IcBackDark } from '../../../assets';
import { Gap } from '../../atoms';
import { colors } from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
        <IcBackDark />
        <Text style={styles.text}>Daftar Akun</Text>
        <Gap width={24}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
    },
    text: {
        textAlign: 'center',
        flex: 1,
        backgroundColor: colors.white,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: colors.black,
    },
});
