import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/Home';
import CounterPage from './src/pages/counter/CounterPage';
import RootHome from './src/pages/home/root/RootHome';

const Stack = createNativeStackNavigator()

const App = () => {
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RootHome"
            component={RootHome}
            options={{headerShown: false}}
          />
            
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
