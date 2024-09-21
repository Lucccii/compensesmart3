import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider,} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import {Home} from "./pages/Home/Home";
import {Result} from "./pages/Result/Result";
import SFPro from "./assets/fonts/FontsFree-Net-SFCompactText-Medium.ttf"
import SpaceMonoRegular from "./assets/fonts/SpaceMono-Regular.ttf"

const Stack = createNativeStackNavigator();
const navTheme = {
    colors: {
        background: "transparent",
    },
};

export default function App() {
    const [isFontLoaded] = useFonts({
        "SFProRegular": SFPro,
    });
  return (
      <NavigationContainer theme={navTheme}>
          {isFontLoaded ? <Stack.Navigator screenOptions={{headerShown:false, animation : "simple_push"}}>

              <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
              <Stack.Screen name={"Result"} component={Result}></Stack.Screen>
          </Stack.Navigator> : null}
      </NavigationContainer>
  );
}
