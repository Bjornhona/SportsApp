/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AthleteItem from './src/components/AthleteItem';

import {getBestAthletes} from './src/services';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [athletes, setAthletes] = useState({});

  console.log(athletes);

  useEffect(() => {
    const getAthletes = async () => {
      try {
        const response = await getBestAthletes();
        setAthletes(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getAthletes();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles}>
          {!loading && (
            <>
              <Text>10 best ranked athletes of Spain</Text>
              {athletes.map(athlete => (
                <AthleteItem key={athlete.athlete_id} athlete={athlete} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
