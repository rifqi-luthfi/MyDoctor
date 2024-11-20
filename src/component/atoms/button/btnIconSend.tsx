import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { IcSendDisable, IcSendVisible } from '../../../assets';
import { colors } from '../../../utils';

interface BtnIconProps {
  onPress: () => void;
  visible: boolean;
}

const BtnIconSend: React.FC<BtnIconProps> = ({ onPress, visible }) => {
  return (
    <TouchableOpacity
      style={[styles.container, visible ? styles.visible : styles.disabled]}
      onPress={onPress}
      disabled={!visible}
    >
      {visible ? <IcSendVisible /> : <IcSendDisable />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  visible: {
    backgroundColor: colors.tertiary,
  },
  disabled: {
    backgroundColor: colors.disable,
  },
});

export default BtnIconSend;
