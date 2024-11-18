import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header, ListDoctor } from '../../component';
import { DummyDoc1 } from '../../assets';
import { colors } from '../../utils';

export default function SelectDoctor({navigation}) {
  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onPress={handleBackPress} title="Pilih Dokter Anak" type="dark"/>
      <ListDoctor
        profile={DummyDoc1}
        name="Muhana Atikah"
        desc="Dokter Surga"
        type ="next"/>
      <ListDoctor
        profile={DummyDoc1}
        name="Muhana Atikah"
        desc="Dokter Surga"
        type ="next"/>
      <ListDoctor
        profile={DummyDoc1}
        name="Muhana Atikah"
        desc="Dokter Surga"
        type ="next"/>
      <ListDoctor
        profile={DummyDoc1}
        name="Muhana Atikah"
        desc="Dokter Surga"
        type ="next"/>
      <ListDoctor
        profile={DummyDoc1}
        name="Muhana Atikah"
        desc="Dokter Surga"
        type ="next"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
