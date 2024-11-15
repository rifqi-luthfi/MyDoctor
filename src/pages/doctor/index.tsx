import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../component';
import { CategoryType, colors, fonts } from '../../utils';
import { JsonCategoryDoctor } from '../../assets';

export default function Doctor() {
  // Function to render the Doctor Categories
  const renderDoctorCategories = () => {
    return JsonCategoryDoctor.data.map((item) => (
      <DoctorCategory key={item.id} category={item.category as CategoryType} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>

          {/* Scrollable categories */}
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {renderDoctorCategories()}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>

          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            {/* Repeated components */}
            {[...Array(3)].map((_, index) => (
              <RatedDoctor key={index} />
            ))}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>

          {/* Repeated News Items */}
          {[...Array(3)].map((_, index) => (
            <NewsItem key={index} />
          ))}

          <Gap height={30} />
        </ScrollView>
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
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
