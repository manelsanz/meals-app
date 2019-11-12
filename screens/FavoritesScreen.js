import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const FavoritesScreen = props => {
  return (
    <View styles={styles.screen}>
      <Text> Favorites Screen! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FavoritesScreen;
