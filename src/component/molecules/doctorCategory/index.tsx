import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IlDokObat, IlDokUmum, IlPsikiater } from '../../../assets';
import { CategoryType, colors, fonts } from '../../../utils';

// Define type for category keys to ensure type safety
interface DoctorCategoryProps {
  category: CategoryType;
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

const DoctorCategory: React.FC<DoctorCategoryProps> = ({ category }) => {
  const SelectedIcon = getIcon(category);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <SelectedIcon />
      </View>
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
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
