import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/SignIn';
import Main from './screens/Main';

export default function App({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
