import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AthleteItem from '../components/athlete-item/AthleteItem';
import Search from '../components/search/Search';
import {
  getBestAthletes,
  getAllCategories,
  getBestAthletesByName,
} from '../services';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [athletes, setAthletes] = useState({});
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    let isCancelled = false;

    const getCategories = async () => {
      try {
        const response = await getAllCategories();
        !isCancelled && setCategories(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    const getAthletes = async () => {
      try {
        const response = await getBestAthletes();
        !isCancelled && (setAthletes(response.data), setLoading(false));
      } catch (err) {
        console.error(err);
      }
    };
    const getSearchAthletes = async () => {
      try {
        const response = await getBestAthletesByName(searchInput);
        setAthletes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    searchInput !== ''
      ? getSearchAthletes()
      : Promise.all([getCategories(), getAthletes()]);

    return () => {
      isCancelled = true;
    };
  }, [searchInput]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          {!loading && (
            <>
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
              <Text>10 best ranked athletes of Spain</Text>
              {athletes && athletes.length > 0 ? (
                athletes.map(athlete => (
                  <AthleteItem
                    key={athlete.athlete_id}
                    athlete={athlete}
                    categories={categories.filter(element =>
                      athlete.athlete_categories.includes(element.cat_id),
                    )}
                  />
                ))
              ) : (
                <View style={styles.noResponse}>
                  <Text>No athletes matched your search.</Text>
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: '#dcdcdc',
  },
  noResponse: {
    padding: 30,
    height: '100%',
  },
});

export default Home;
