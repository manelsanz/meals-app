import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const MealDetailScreen = props => {
  return (
    <View styles={styles.screen}>
      <Text> MealDetail Screen! </Text>
      <Button title="Go Back to Meals" onPress={() => props.navigation.pop()} />
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

export default MealDetailScreen;
