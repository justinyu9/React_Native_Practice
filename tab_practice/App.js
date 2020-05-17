import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './screens/tabs';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Tabs"
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
          component={HomeScreen} />
        <Stack.Screen name="Tabs"
          component={TabScreen}
          options={{
          headerLeft: null,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
