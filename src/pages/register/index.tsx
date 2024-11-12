import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../component';
import { colors } from '../../utils';

const Register: React.FC = () => {
  return (
      <View style={styles.page}>
        <Header />
        <View style={styles.content}>
          <Input label="Full Name"/>
          <Gap height={24}/>
          <Input label="Job"/>
          <Gap height={24}/>
          <Input label="Email Address"/>
          <Gap height={24}/>
          <Input label="Password"/>
          <Gap height={40}/>
          <Button type="primary" title="Continue" onPress={() => {}} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  page : {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});

export default Register;
