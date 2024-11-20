import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap, Header, List, Profile } from '../../component';
import { colors } from '../../utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types'; // Importing the type for navigation

// Define the navigation prop types
type UserProfileProps = NativeStackScreenProps<RootStackParamList, 'UserProfile'>;

const UserProfile: React.FC<UserProfileProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />  {/* Corrected the goBack usage */}
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        onPress={() => {}}
        icon="edit-profile"
      />
      <List
        name="Edit Language"
        desc="Last Update Yesterday"
        type="next"
        onPress={() => {}}
        icon="language"
      />
      <List
        name="Give Rating"
        desc="Last Update Yesterday"
        type="next"
        onPress={() => {}}
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Last Update Yesterday"
        type="next"
        onPress={() => {}}
        icon="help"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default UserProfile;
