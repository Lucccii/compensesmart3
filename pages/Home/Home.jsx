import {ScrollView, View, KeyboardAvoidingView, Platform, TouchableOpacity, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider,} from "react-native-safe-area-context";
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from "react-native-dialog";

import {Header} from '../../components/Header/Header'
import {Body} from "../../components/Body/Body";
import {ResultButton} from "../../components/ResultButton/ResultButton";
import {tabModels} from "../../Models/tabModels";
import { BookContext } from "../../contexts/isIsCleanTabLineRender";

import {s} from './Home.style'

let isFirstRender = true;
let isLoadUpdate = false;

export function Home () {
    const nav = useNavigation()
    const [grpFondTab, setGrpFondTab] = useState(tabModels)
    const [grpCompTab, setGrpCompTab] = useState(tabModels)
    const [grpAutreTab, setGrpAutreTab] = useState(tabModels)
    const [NTPLDescpIsVisible, setNTPLDescpIsVisible] = useState(false)
    const [isCleanTabLineRender, setIsCleanTabLineRender] = useState(false)

    async function saveData (){
        try {
            const data = [grpFondTab, grpCompTab, grpAutreTab]
            //console.log("-------------------")
            //console.log("SAVED DATA : ", data)
            //console.log(data)
            //console.log("-------------------")
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('@data', jsonValue);
        } catch (e) {
            // saving error
        }
    }

    async function loadData (){
        try {
            const jsonValue = await AsyncStorage.getItem('@data');
            //console.log("in LOAD Data")
            if (jsonValue !== null) {
                //console.log("-------------------")
                //console.log("DATA LOADED :")
                const data = JSON.parse(jsonValue)
                //console.log("data 0 ")
                //console.log(data[0])
                //console.log("data 1 : ")
                //console.log(data[1])
                //console.log("data 2 : ")
                //console.log(data[2])
                //console.log("-------------------")
                //console.log(data)
                setGrpFondTab(data[0])
                setGrpCompTab(data[1])
                setGrpAutreTab(data[2])
                isLoadUpdate = true;
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        if (isLoadUpdate) {
            isLoadUpdate = false;
        } else {
            if (!isFirstRender) {
                saveData();
            } else {
                isFirstRender = false;
            }
        }
    }, [grpFondTab, grpCompTab, grpAutreTab]);

    useEffect(() => {
        loadData();
    }, []);

    function handleCancel() {
        setNTPLDescpIsVisible(false)
    }

    return <>
        <BookContext.Provider value={{isCleanTabLineRender, setIsCleanTabLineRender, setNTPLDescpIsVisible}}>
        <SafeAreaProvider>
            <SafeAreaView style={{flex : 1, }}>
                <View style={s.header}>
                    <Header />
                </View>
                <View style={s.body}>
                    <KeyboardAvoidingView style={s.keyboardAvoidingViewStyle}
                                          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuster le comportement en fonction de la plateforme
                                          keyboardVerticalOffset={120} >
                        <ScrollView>
                            <Body GrpFondTab={[grpFondTab, setGrpFondTab]} GrpCompTab={[grpCompTab, setGrpCompTab]} GrpAutreTab={[grpAutreTab, setGrpAutreTab]}/>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider >
        <ResultButton GrpFondTab={[grpFondTab, setGrpFondTab]} GrpCompTab={[grpCompTab, setGrpCompTab]} GrpAutreTab={[grpAutreTab, setGrpAutreTab]} />
        </BookContext.Provider>
        <View>
            <Dialog.Container visible={NTPLDescpIsVisible} onBackdropPress={() => {
                setNTPLDescpIsVisible(false);
            }}>
                <Dialog.Title style={{fontSize : 25, marginBottom : 7}} >Description</Dialog.Title>
                <Dialog.Description>
                    NTPL signifie note planché
                </Dialog.Description>
                <Dialog.Description>
                    Si vous n'en avez pas, laissez {"\n"}
                    le champ vide
                </Dialog.Description>
                <Dialog.Button style={{color : "black"}} label="OK" onPress={() => setNTPLDescpIsVisible(false)} />
            </Dialog.Container>
        </View>
    </>
}