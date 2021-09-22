import React from 'react';
import {View, Text} from 'react-native';

const AthleteSpecifics = ({route}) => {
  const {athlete, categoryNames} = route.params;

  console.log(athlete);
  console.log(categoryNames);

  return (
    <View>
      <Text>{athlete.athlete_title}</Text>
      <Text>
        Category:{' '}
        {categoryNames && categoryNames.length > 0 && categoryNames.join(', ')}
      </Text>
    </View>
  );
};

export default AthleteSpecifics;
