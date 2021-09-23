import {getOuterBindingIdentifiers} from '@babel/types';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AthleteSpecifics = ({route}) => {
  const {fullAthleteDetails, categoryNames} = route.params;
  const profileImage = fullAthleteDetails.athlete_profile_image;
  const country = fullAthleteDetails.athlete_country_name;
  const statsArr = fullAthleteDetails.stats
    ? Object.entries(fullAthleteDetails.stats)
    : [];
  const rankingsArr = fullAthleteDetails.current_rankings
    ? Object.entries(fullAthleteDetails.current_rankings)
    : [];

  // console.log(fullAthleteDetails);
  console.log(rankingsArr);

  return (
    <View style={styles.athleteDetail}>
      <Text style={styles.headline}>
        {fullAthleteDetails.athlete_title
          ? fullAthleteDetails.athlete_title
          : 'Athlete Details'}
      </Text>
      <View style={styles.details}>
        <View>
          <Text>
            Category:{' '}
            {categoryNames &&
              categoryNames.length > 0 &&
              categoryNames.join(', ')}
          </Text>
          {fullAthleteDetails && <Text>Country: {country}</Text>}

          {statsArr.length > 0 && (
            <>
              <Text style={styles.title}>Stats</Text>
              {statsArr.map(stat => (
                <Text>
                  {stat[0].charAt(0).toUpperCase()}
                  {stat[0].replaceAll('_', ' ').slice(1)}
                  {': '}
                  {stat[1]}
                </Text>
              ))}
            </>
          )}

          <Text style={styles.title}>Rankings</Text>
          {rankingsArr.length > 0 &&
            rankingsArr.map(ranking => (
              <Text>
                {ranking[1].ranking_name}
                {': '}
                {ranking[1].ranking}
              </Text>
            ))}
        </View>

        {profileImage && profileImage !== '' && profileImage !== {} && (
          <Image source={{uri: profileImage}} style={styles.profileImage} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  athleteDetail: {
    padding: 10,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    borderWidth: 1,
    borderColor: '#000000',
    width: 200,
    height: 300,
    resizeMode: 'cover',
  },
});

export default AthleteSpecifics;
