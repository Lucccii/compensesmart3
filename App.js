import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider,} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";""

import {Home} from "./pages/Home/Home";
import {Result} from "./pages/Result/Result";
import img from "./assets/images/checkImg.png"
import { useFonts, WorkSans_500Medium, WorkSans_600SemiBold } from '@expo-google-fonts/work-sans'

const Stack = createNativeStackNavigator();
const navTheme = {
    colors: {
        background: "transparent",
    },
};

export default function App() {
    // Charger polices
    const [fontsLoaded] = useFonts({
        'SFProRegular': WorkSans_500Medium, // Remplacez par le chemin de votre police
        'SFProBold': WorkSans_500Medium,
    });

    // Si les polices ne sont pas encore chargées, afficher un écran de chargement
    if (!fontsLoaded) {
        return (
            <View>
                <Text>Chargement...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'simple_push' }}>
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"Result"} component={Result} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}