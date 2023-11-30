import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ARRAY_ROUTES} from './routesConfig';
const Stack = createNativeStackNavigator();

const RouterProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {ARRAY_ROUTES.map(route => (
          <Stack.Screen key={route.id} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterProvider;
