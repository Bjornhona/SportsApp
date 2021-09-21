import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {getAthleteInfo} from '../services';

const AthleteItem = ({athlete, categories}) => {
  const [profileImage, setProfileImage] = useState('');
  const [rankings, setRankings] = useState({});
  const categoryNames = categories.map(category => category.cat_name);

  console.log(rankings);
  console.log(profileImage);

  useEffect(() => {
    let isCancelled = false;

    const getProfile = async () => {
      try {
        const response = await getAthleteInfo(athlete.athlete_id);
        const profileData = response.data;
        profileData.athlete_profile_image &&
          setProfileImage(profileData.athlete_profile_image);
        profileData.current_rankings &&
          setRankings(profileData.current_rankings);
      } catch (err) {
        console.error(err);
      }
    };
    !isCancelled && getProfile();

    return () => (isCancelled = true);
  }, [athlete.athlete_id]);

  return (
    <View>
      {profileImage.length > 0 && <Image source={{uri: `${profileImage}`}} />}
      <Text>{athlete.athlete_title}</Text>
      <Text>{categories && categoryNames.join(', ')}</Text>
    </View>
  );
};

export default AthleteItem;
