import {Text, TouchableOpacity, useColorScheme, View} from "react-native";
import {BookContext} from "../../contexts/isIsCleanTabLineRender";
import {useContext} from "react"

import {s} from "./ResultButton.style";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {calculMoyenne} from "../../service/calculMoyenne";

export function ResultButton({GrpFondTab, GrpCompTab, GrpAutreTab}) {
    const {setIsCleanTabLineRender, isCleanTabLineRender} = useContext(BookContext);
    const nav = useNavigation()
    function cleanFunctionAndGoResult() {
        [GrpFondTab, GrpCompTab, GrpAutreTab].map((grp) => {
            const [tab, setTab] = grp
            let cmpt = 1;
            const filterTab = tab.filter((item) => {
                if ((item.ECTs === undefined || item.ECTs ==="") && (item.Note === undefined || item.Note==="")  && (item.Name === "")){
                    if (cmpt <= 0){
                        return false
                    }
                    cmpt -= 1;
                }
                return true
            })
            setTab(filterTab)
        })
        nav.navigate("Result", {result : calculMoyenne(GrpFondTab[0], GrpCompTab[0], GrpAutreTab[0])})
    }
    return <View style={s.footer}>
        <TouchableOpacity style={s.button} onPress={() => cleanFunctionAndGoResult()}>
            <Text style={s.txt}>Simuler le semestre</Text>
        </TouchableOpacity>
    </View>
}