import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input, Profile } from '../../component';
import { colors } from '../../utils';
import { RootStackParamList } from '../../utils/types'; // Importing the type for navigation

// Define the navigation prop types
type EditProfileProps = NativeStackScreenProps<RootStackParamList, 'EditProfile'>;

const EditProfile: React.FC<EditProfileProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove={true}/>
                    <Gap height={26} />
                    <Input label = "Full Name"/>
                    <Gap height={24}/>
                    <Input label = "Pekerjaan"/>
                    <Gap height={24}/>
                    <Input label = "Email"/>
                    <Gap height={24}/>
                    <Input label = "Password"/>
                    <Gap height={40}/>
                    <Button title="Save Profile" onPress={() => navigation.goBack()}/>
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
    padding: 40,
    paddingTop: 0,
  },
});

export default EditProfile;
