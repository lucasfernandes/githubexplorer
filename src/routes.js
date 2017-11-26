import { StackNavigator } from 'react-navigation';

import Main from 'pages/Main';
import Favorites from 'pages/Favorites';

import headerStyle from 'components/Header/styles';

const routes = StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  navigationOptions: {
    headerTintColor: '#333',
    headerStyle: headerStyle.headerContainer,
    headerTitleStyle: headerStyle.headerTitle,
  },
});

export default routes;
