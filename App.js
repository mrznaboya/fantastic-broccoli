import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Business Search" component={SearchScreen} />
      <Stack.Screen name="Results Show" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
