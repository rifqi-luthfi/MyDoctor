import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../component';
import { CategoryType, colors, fonts } from '../../utils';
import { JsonCategoryDoctor, DummyDoc1 } from '../../assets';

interface DoctorProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const Doctor: FC<DoctorProps> = ({ navigation }) => {
  const topRatedDoctors = [
    { id: 1, name: 'Kenzie Nararya', category: 'Pediatrician', avatar: DummyDoc1 },
    { id: 2, name: 'Jane Doe', category: 'Dermatologist', avatar: DummyDoc1 },
    { id: 3, name: 'John Smith', category: 'Cardiologist', avatar: DummyDoc1 },
  ];

  const renderDoctorCategories = () =>
    JsonCategoryDoctor.data.map((item) => (
      <DoctorCategory
        key={item.id}
        category={item.category as CategoryType}
        onPress={() => navigation.navigate('SelectDoctor')}
      />
    ));

  const renderTopRatedDoctors = () =>
    topRatedDoctors.map((doctor) => (
      <RatedDoctor
        key={doctor.id}
        name={doctor.name}
        category={doctor.category}
        avatar={doctor.avatar}
        onPress={() => navigation.navigate('DoctorProfile', { doctorId: doctor.id })}
      />
    ));

  const renderNewsItems = () =>
    Array.from({ length: 3 }).map((_, index) => <NewsItem key={index} />);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>

          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryContainer}>
                <Gap width={32} />
                {renderDoctorCategories()}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>

          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            {renderTopRatedDoctors()}

            <Text style={styles.sectionLabel}>Good News</Text>
            {renderNewsItems()}

            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

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

export default Doctor;
