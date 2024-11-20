import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../component';
import { CategoryType, colors, fonts } from '../../utils';
import { JsonCategoryDoctor } from '../../assets';

interface DoctorProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export default function Doctor({ navigation }: DoctorProps) {
  // Render doctor categories dynamically
  const renderDoctorCategories = () =>
    JsonCategoryDoctor.data.map((item) => (
      <DoctorCategory
        key={item.id}
        category={item.category as CategoryType}
        onPress={() => navigation.navigate('SelectDoctor')}
      />
    ));

  // Render repeated components (e.g., RatedDoctor or NewsItem)
  const renderRepeatedComponents = (Component: React.FC, count: number) =>
    Array.from({ length: count }).map((_, index) => <Component key={index} />);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>

          {/* Doctor Categories Section */}
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryContainer}>
                <Gap width={32} />
                {renderDoctorCategories()}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>

          {/* Top Rated Doctors Section */}
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            {renderRepeatedComponents(RatedDoctor, 3)}

            {/* News Section */}
            <Text style={styles.sectionLabel}>Good News</Text>
            {renderRepeatedComponents(NewsItem, 3)}

            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 30,
    maxWidth: 209,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
  },
});
