import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ChatItem, Header, InputChat } from '../../component';
import { colors, fonts, RootStackParamList } from '../../utils';

type ChattingScreenProps = NativeStackScreenProps<RootStackParamList, 'Chatting'>;

const Chatting: React.FC<ChattingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        title="Dr. Andre Kurniawan"
        type="dark-profile"
      />
      <Text style={styles.chatDate}>Senin, 18 November 2024</Text>
      <ScrollView
        style={styles.chatContent}
        contentContainerStyle={styles.chatContentContainer}
        keyboardShouldPersistTaps="handled" // Ensures taps on the screen dismiss the keyboard
      >
        <ChatItem isReceiver />
        <ChatItem isReceiver={false} />
        <ChatItem isReceiver />
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
    marginVertical: 16, // Consistent spacing
  },
  chatContent: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chatContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16, // Prevent overlap with the input field
  },
});

export default Chatting;
