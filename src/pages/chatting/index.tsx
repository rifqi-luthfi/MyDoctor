import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ChatItem, Header, InputChat } from '../../component';
import { colors, fonts, RootStackParamList } from '../../utils';

type ChattingScreenProps = NativeStackScreenProps<RootStackParamList, 'Chatting'>;

const Chatting: React.FC<ChattingScreenProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Dr. Andre Kurniawan" type="dark-profile" />
      <Text style={styles.chatDate}>Senin, 18 November 2024</Text>
      <ScrollView style={styles.chatContent}>
        <ChatItem isReceiver/>
        <ChatItem />
        <ChatItem isReceiver/>
      </ScrollView>
      <InputChat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chatDate: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
  },
  chatContent: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
});

export default Chatting;
