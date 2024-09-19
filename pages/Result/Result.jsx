import {Image, Text, View, TouchableOpacity} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native';
import {useNavigation} from "@react-navigation/native";


import {Header} from "../../components/Header/Header";
import {Ionicons} from "@expo/vector-icons";
import {s} from "./Result.style"

const validImg = require('../../assets/images/checkImg.png');
const invalidImg = require('../../assets/images/uncheck.png');

export function Result(){
    const route = useRoute()
    const {result} = route.params
    const nav = useNavigation()

    useEffect(() => {
        console.log("In result's useEffect : ")
        console.log(result)
    }, []);

    const isValidSemester = () => {
        switch (result[3]) {
            case true:
                return <Text>Bravo, tu valides ton semestre !</Text>
            case false:
                return <Text>Aie, tu ne valides pas ton semestre... </Text>
            default:
                return <Text>Valeur non reconnue</Text>;
        }
    };

    if (!result || result.length < 3) {
        return <Text>Chargement des résultats...</Text>;
    }

    //result[0][0]
    const [moyenneGrpFond, setMoyenneGrpFond] = useState(result[0][0])
    const [moyenneGrpComp, setMoyenneGrpComp] = useState(result[1][0])
    const [moyenneGrpAutres, setMoyenneGrpAutres] = useState(result[2][0])
    const [test, setTest] = useState(false)

    return <SafeAreaProvider>
        <SafeAreaView style={{flex : 1, backgroundColor : "#F9F9F9"}}>
            <View style={s.page}>
                <View style={s.backPageContainer}>
                    <TouchableOpacity onPress={() => nav.navigate("Home")} >
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={s.imgContainer}>
                    <Image source={result[3] ? validImg : invalidImg} style={s.image} />
                    {isValidSemester()}
                </View>
                <View><Text>{result[3]}</Text></View>
                <View style={s.resultTxtArea}>
                    <View style={s.resultCard}>
                        <Text style={s.resultTitle}>Moyenne groupe fondamental :</Text>
                        <Text style={[s.resultValue, (moyenneGrpFond >= 10) ? s.valid : s.invalid]}>
                            {moyenneGrpFond}
                        </Text>
                    </View>

                    <View style={s.resultCard}>
                        <Text style={s.resultTitle}>Moyenne groupe complémentaire :</Text>
                        <Text style={[s.resultValue, (moyenneGrpComp >= 10) ? s.valid : s.invalid]}>
                            {moyenneGrpComp}
                        </Text>
                    </View>

                    <View style={s.resultCard}>
                        <Text style={s.resultTitle}>Moyenne groupe autres :</Text>
                        <Text style={[s.resultValue, (moyenneGrpAutres >= 10) ? s.valid : s.invalid]}>
                            {moyenneGrpAutres}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
}