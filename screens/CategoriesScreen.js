import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textBold}> CATEGORIES </Text>
      <Text> Categories Screen! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    fontSize: 90,
  },
  textBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 32,
  },
});

export default CategoriesScreen;
