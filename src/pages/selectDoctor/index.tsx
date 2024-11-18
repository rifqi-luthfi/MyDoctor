import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, ListDoctor } from '../../component';
import { DummyDoc1 } from '../../assets';
import { colors, RootStackParamList } from '../../utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SelectDoctorScreenProps = NativeStackScreenProps<RootStackParamList, 'Chatting'>;

const SelectDoctor: React.FC<SelectDoctorScreenProps> = ({ navigation }) => {
  // Dummy data for the doctors
  const doctors = [
    { id: 1, profile: DummyDoc1, name: 'Dr. Muhana Atikah', desc: 'Dokter Spesialis Anak' },
    { id: 2, profile: DummyDoc1, name: 'Dr. Rifqi Rahman', desc: 'Dokter Umum' },
    { id: 3, profile: DummyDoc1, name: 'Dr. Fatimah Zahra', desc: 'Dokter Spesialis Kandungan' },
    { id: 4, profile: DummyDoc1, name: 'Dr. Ahmad Fauzi', desc: 'Dokter Spesialis Jantung' },
    { id: 5, profile: DummyDoc1, name: 'Dr. Aisyah Hasanah', desc: 'Dokter Spesialis Gigi' },
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDoctorSelection = () => {
    navigation.navigate('Chatting');
  };

  return (
    <View style={styles.container}>
      <Header onPress={handleBackPress} title="Pilih Dokter Anak" type="dark" />
      <View style={styles.listContainer}>
        {doctors.map((doctor) => (
          <ListDoctor
            key={doctor.id}
            profile={doctor.profile}
            name={doctor.name}
            desc={doctor.desc}
            type="next"
            onPress={handleDoctorSelection}
          />
        ))}
      </View>
    </View>
  );
};

export default SelectDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
