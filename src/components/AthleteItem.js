import React from 'react';
import {View, Text} from 'react-native';

const AthleteItem = ({athlete}) => {
  return (
    <View>
      <Text>{athlete.athlete_title}</Text>
    </View>
  );
};

export default AthleteItem;
