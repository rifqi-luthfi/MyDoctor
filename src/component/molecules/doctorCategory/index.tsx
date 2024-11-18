import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IlDokObat, IlDokUmum, IlPsikiater } from '../../../assets';
import { CategoryType, colors, fonts } from '../../../utils';

// Define type for category keys to ensure type safety
interface DoctorCategoryProps {
  category: CategoryType;
  onPress: () => void
}

// Icon selection based on category with proper typing
const getIcon = (category: CategoryType) => {
  const icons: Record<CategoryType, React.FC> = {
    'dokter umum': IlDokUmum,
    'psikiater': IlPsikiater,
    'dokter obat': IlDokObat,
  };

  return icons[category];
};

const DoctorCategory: React.FC<DoctorCategoryProps> = ({ category, onPress }) => {
  const SelectedIcon = getIcon(category);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <SelectedIcon />
      </View>
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  iconWrapper: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});

export default DoctorCategory;
