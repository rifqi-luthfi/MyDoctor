import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';
import { DummyDoc1 } from '../../../assets';

export default function Sender() {
  return (
    <View style={styles.container}>
        <Image source={DummyDoc1} style={styles.avatar}/>
        <View>
            <View style={styles.chatContent}>
                <Text style={styles.text}>Ibu Dokter, Apakah begadang itu buruk?</Text>
            </View>
            <Text style={styles.date}>5.00 AM</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-end', // Align the entire container to the right
      marginBottom: 20,
      flexDirection: 'row',
    },
    chatContent: {
      padding: 12,
      paddingRight: 18,
      backgroundColor: colors.primary,
      borderRadius: 10, // Adds rounded corners to chat bubbles
      borderBottomLeftRadius: 0,
      maxWidth: '80%', // Ensures chat bubbles don't stretch beyond 70% of the screen width
    },
    text: {
      fontSize: 14,
      fontFamily: fonts.primary[400],
      color: colors.white,
    },
    date: {
      fontSize: 11,
      fontFamily: fonts.primary[400],
      color: colors.text.secondary,
      marginTop: 8,
      textAlign: 'left',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 16,
    },
  });

