import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../component';
import { colors } from '../../utils';
import { RootStackParamList } from '../../utils/types'; // Importing the type for navigation

type DoctorProfileProps = NativeStackScreenProps<RootStackParamList, 'DoctorProfile'>;

const DoctorProfile: React.FC<DoctorProfileProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile name="Rifqi Luthfi" desc="Android Developer" />
          <Gap height={10} />
          <ProfileItem label="Alumnus" value="Telkom University, 2018" />
          <ProfileItem label="Experience" value="5 years in Mobile Development" />
          <ProfileItem label="Specialty" value="Android Development & Kotlin" />
          <View style={styles.action}>
            <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {

  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});

export default DoctorProfile;
