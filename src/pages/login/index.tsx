import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import { colors, fonts } from '../../utils';

const Login: React.FC<{navigation : any}> = ({navigation}) => {
  const handleContinuePress = () => navigation.replace('MainApp');
  return (
      <View style={styles.page}>
        <IlLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label = "Email Address"/>
        <Gap height={24}/>
        <Input label = "Password"/>
        <Gap height={10}/>
        <Link title="Forgot My Passoword" size={12}/>
        <Gap height={40}/>
        <Button
          type="primary"
          title="Login"
          onPress={handleContinuePress}
        />
        <Gap height={30}/>
        <Link title="Create My Account" size={16} align="center"/>
      </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
     fontSize: 20,
     fontFamily: fonts.primary[600],
     color: colors.secondary,
     marginVertical: 40,
     maxWidth: 153,
  },
});

export default Login;
