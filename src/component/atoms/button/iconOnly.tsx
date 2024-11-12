import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { IcBackDark } from '../../../assets'; // Assuming IcBackDark is the correct import
import { IconType } from '../../../utils';

interface IconOnlyProps {
  onPress: () => void;
  icon: IconType
}

const IconOnly: React.FC<IconOnlyProps> = ({ onPress, icon }) => {
  const renderIcon = () => {
    if (icon === 'back-dark' || icon === 'back-light') {
      return <IcBackDark />;
    }
    return <IcBackDark />; // Default icon if no match
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any required styling for the TouchableOpacity
  },
});

export default IconOnly;
