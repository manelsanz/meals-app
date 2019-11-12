import {createStackNavigator, createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetail from '../screens/MealDetailScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Meals: {
    screen: MealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
