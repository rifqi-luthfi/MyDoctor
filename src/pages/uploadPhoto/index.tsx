import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Header, Link } from '../../component';
import { IcAddPhoto, IlNullPhoto } from '../../assets';
import { colors, fonts } from '../../utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types';

type UploadPhotoProps = NativeStackScreenProps<RootStackParamList, 'UploadPhoto'>;

const UploadPhoto: React.FC<UploadPhotoProps> = ({ navigation }) => {
  const handleBackPress = () => navigation.goBack();

  const handleContinuePress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      })
    );
  };

  return (
    <View style={styles.page}>
      <Header onPress={handleBackPress} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={IlNullPhoto} style={styles.avatar} />
            <IcAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Rifqi Luthfi</Text>
          <Text style={styles.job}>Android Developer</Text>
        </View>
        <View>
          <Button type="primary" title="Upload and Continue" onPress={handleContinuePress} />
          <Gap height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={handleContinuePress} // Skip and reset stack
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 64,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  job: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
