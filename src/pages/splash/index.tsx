
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IlLogo } from '../../assets';

export default function Splash() {
  return (
    <View style={styles.page}>
       <IlLogo />
       <Text style ={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#112340',
        textAlign: 'center',
        marginTop: 20,
    },
});
