import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider,} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Home} from "./pages/Home/Home";
import {Result} from "./pages/Result/Result";
import {PopResultArea} from "./components/PopResultArea/PopResultArea";

const Stack = createNativeStackNavigator();
const navTheme = {
    colors: {
        background: "transparent",
    },
};

export default function App() {
  return (
      <NavigationContainer theme={navTheme}>
          <Stack.Navigator screenOptions={{headerShown:false, animation : "simple_push"}}>
              <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
              <Stack.Screen name={"Result"} component={Result}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const s = StyleSheet.create({
});
