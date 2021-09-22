import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = ({searchInput, setSearchInput}) => {
  const handleSearchInput = event => {
    setSearchInput(event);
  };

  return (
    <View>
      <TextInput
        style={styles.searchField}
        type="text"
        name="name"
        value={searchInput}
        onChangeText={handleSearchInput}
        placeholder="Search by athlete name..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
});

export default Search;
