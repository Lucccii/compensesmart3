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
            console.log("NEW GRP TO FILTER -------------------------------------------------------")
            const [tab, setTab] = grp
            let cmpt = 1;
            let idGiver = 0;
            const filterTab = tab.filter((item) => {
                //console.log("-----------------------------")
                //console.log("currentItem = ")
                //console.log(item)
                if ((item.ECTs === undefined || item.ECTs ==="") && (item.Note === undefined || item.Note==="")  && (item.Name === "")){
                    console.log("Condition passed")
                    //console.log("Verified condition sir")
                    console.log("cmpt now at ; ", cmpt)
                    if (cmpt <= 0){
                        console.log("cpmt already not null so get out for ", item)
                        return false
                    }
                    cmpt -= 1;
                }
                console.log("cpmt not negative so let's go for OR Valid ITEM", item)
                return true
            })
            console.log("------------------------------")
            console.log('for tab ', tab, " filtred tab = ", filterTab)
            console.log("------------------------------")

            setTab(filterTab)
            console.log("END GRP TO FILTER -------------------------------------------------------")
        })
        nav.navigate("Result", {result : calculMoyenne(GrpFondTab[0], GrpCompTab[0], GrpAutreTab[0])})
    }
    return <View style={s.footer}>
        <TouchableOpacity style={s.button} onPress={() => cleanFunctionAndGoResult()}>
            <Text style={s.txt}>Simuler le semestre</Text>
        </TouchableOpacity>
    </View>
}