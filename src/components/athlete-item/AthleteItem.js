import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {getAthleteInfo} from '../../services';
import {useNavigation} from '@react-navigation/native';

const AthleteItem = ({athlete, categories}) => {
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState('');
  const [rankings, setRankings] = useState({});
  const categoryNames = categories.map(category => category.cat_name);
  const navigation = useNavigation();

  useEffect(() => {
    let isCancelled = false;

    const getProfile = async () => {
      try {
        const response = await getAthleteInfo(athlete.athlete_id);
        const profileData = response.data ? response.data : {};

        profileData.athlete_profile_image &&
          setProfileImage(profileData.athlete_profile_image);

        profileData.current_rankings &&
          setRankings(profileData.current_rankings);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    !isCancelled && getProfile();

    return () => (isCancelled = true);
  }, [athlete.athlete_id]);

  return (
    <TouchableOpacity
      style={styles.athleteItem}
      onPress={() =>
        navigation.navigate('AthleteDetail', {
          athlete: athlete,
          categoryNames: categoryNames,
        })
      }>
      <View style={styles.athleteDescription}>
        <Text>{athlete.athlete_title}</Text>
        <Text>{categories && categoryNames.join(', ')}</Text>
        <Text>
          World ranking:{' '}
          {!loading &&
            rankings.world_rankings &&
            rankings.world_rankings.ranking}
        </Text>
      </View>
      {!loading &&
      profileImage &&
      profileImage !== '' &&
      profileImage !== {} ? (
        <Image source={{uri: profileImage}} style={styles.profileImage} />
      ) : (
        <View style={[styles.profileImage, styles.emptyImage]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  athleteItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
    margin: 5,
  },
  emptyImage: {
    backgroundColor: '#dcdcdc',
  },
});

export default AthleteItem;
