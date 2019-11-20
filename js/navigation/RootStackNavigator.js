import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationLayout from './NavigationLayout';
import Speaker from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: Speaker,
    },
    {headerMode: 'none', mode: 'modal'},
  ),
);
