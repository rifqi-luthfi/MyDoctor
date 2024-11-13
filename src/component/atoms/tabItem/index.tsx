import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IcDoctor, IcDoctorActive, IcHospitals, IcHospitalsActive, IcMessages, IcMessagesActive } from '../../../assets';
import { colors, fonts, TabLabel } from '../../../utils';

interface TabItemProps {
  title: TabLabel;  // 'Doctor' | 'Messages' | 'Hospitals'
  active: boolean;  // If the tab is active or not
  onPress: () => void; // onPress handler to handle press events
  onLongPress: () => void;
  index: number
}

const TabItem: React.FC<TabItemProps> = ({ title, active, onPress, onLongPress, index }) => {
  // Choose the icon based on the title
  const renderIcon = () => {
    switch (title) {
      case 'Doctor':
        return active ? <IcDoctorActive /> : <IcDoctor />;
      case 'Messages':
        return active ? <IcMessagesActive /> : <IcMessages />;
      case 'Hospitals':
        return active ? <IcHospitalsActive /> : <IcHospitals />;
      default:
        return <IcDoctor />;
    }
  };

  const styles = dynamicStyles(active);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      {renderIcon()}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Dynamic style based on active state
const dynamicStyles = (active: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center', // Align icon and text in the center
      opacity: active ? 1 : 0.6, // Adjust opacity based on active state
    },
    text: {
      fontSize: 10,
      fontFamily: fonts.primary[600],
      textAlign: 'center',
      color: active ? colors.text.menuActive : colors.text.menuInactive, // Text color changes when active
    },
  });

export default TabItem;
