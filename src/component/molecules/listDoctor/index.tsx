import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyDoc2 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.container}>
        <Image source={DummyDoc2} style={styles.avatar}/>
        <View>
            <Text style={styles.name}>Aziz Pratama</Text>
            <Text style={styles.desc}>Baik Bu, terimakasih banyak atas waktunya</Text>
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
        alignItems: 'center',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    },
});
