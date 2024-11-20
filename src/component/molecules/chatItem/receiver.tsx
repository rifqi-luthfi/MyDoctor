import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

export default function Receiver() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Ibu Dokter, Apakah begadang itu buruk?</Text>
      </View>
      <Text style={styles.date}>5.00 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-end', // Align the entire container to the right
      marginBottom: 20,
    },
    chatContent: {
      padding: 12,
      paddingRight: 18,
      backgroundColor: colors.cardLight,
      borderRadius: 10, // Adds rounded corners to chat bubbles
      borderBottomRightRadius: 0,
      maxWidth: '70%', // Ensures chat bubbles don't stretch beyond 70% of the screen width
    },
    text: {
      fontSize: 14,
      fontFamily: fonts.primary[400],
      color: colors.text.primary,
    },
    date: {
      fontSize: 11,
      fontFamily: fonts.primary[400],
      color: colors.text.secondary,
      marginTop: 8,
    },
  });

