import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoc1, DummyDoc2, DummyDoc3 } from '../../assets';
import { List } from '../../component';
import { colors, fonts } from '../../utils';
import { NavigationProp } from '@react-navigation/native'; // Import navigation types

// Define the props for the component
type MessagesProps = {
  navigation: NavigationProp<any>; // Type the navigation prop
};

// Define the Message type
type Message = {
  id: number;
  profile: any; // Type the profile based on your actual asset (e.g., image source)
  name: string;
  desc: string;
};

const Messages: React.FC<MessagesProps> = ({ navigation }) => {
  // State for messages
  const [messages] = useState<Message[]>([
    {
      id: 1,
      profile: DummyDoc1,
      name: 'Aziz Pratama',
      desc: 'Baik Ibu, terimakasih',
    },
    {
      id: 2,
      profile: DummyDoc2,
      name: 'Rina Sari',
      desc: 'Silakan Ibu periksakan ke dokter...',
    },
    {
      id: 3,
      profile: DummyDoc3,
      name: 'Dina Puspita',
      desc: 'Selamat pagi, ada yang bisa saya bantu?',
    },
  ]);

  const handlePress = () => {
    navigation.navigate('Chatting'); // Navigate to 'Chatting' screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {messages.map((message) => (
          <List
            key={message.id}
            profile={message.profile}
            name={message.name}
            desc={message.desc}
            onPress={handlePress} // Pass handlePress function to navigate
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 16, // Added some padding for better layout
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginLeft: 16,
  },
});

export default Messages;
