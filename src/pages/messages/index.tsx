import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoc1, DummyDoc2, DummyDoc3 } from '../../assets';
import { List } from '../../component';
import { colors, fonts } from '../../utils';

export default function Messages() {
  const [messages] = useState([
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
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
}

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
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
