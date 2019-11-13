import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const MealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // const catName = props.navigation.getParam('categoryName');
  const selectedCategory = CATEGORIES.find(item => item.id === catId);
  return (
    <View styles={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meals"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button title="Go Back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

MealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  // const catName = props.navigation.getParam('categoryName');
  const selectedCategory = CATEGORIES.find(item => item.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsScreen;
