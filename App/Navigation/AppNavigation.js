import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Launch from '../Containers/Launch/Launch';

import styles from './Styles/Navigation.styles';

// Manifest of possible screens
const MainNavigation = createStackNavigator(
  {
    Launch: {screen: Launch},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Launch',
    navigationOptions: {
      headerStyle: styles.header,
    },
    swipeEnabled: true,
    gestureEnabled: true,
  },
);

export default createAppContainer(MainNavigation);
