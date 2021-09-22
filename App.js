import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import AthleteDetail from './src/pages/AthleteDetail';

const RootStack = createStackNavigator();

const App = () => {
  const screens = [
    {name: 'Home', component: Home},
    {name: 'AthleteDetail', component: AthleteDetail},
  ];

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRootName="Home">
        {screens.map(screen => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
