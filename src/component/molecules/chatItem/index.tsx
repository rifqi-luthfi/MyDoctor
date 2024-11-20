import React from 'react';
import Receiver from './receiver';
import Sender from './sender';

export default function ChatItem({isReceiver}) {
  if (isReceiver) {
    return <Receiver />;
  }
  return <Sender />;
}
