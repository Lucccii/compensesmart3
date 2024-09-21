import {Image, View} from "react-native";
import {Text} from "react-native";
import {s} from './Body.style'
import {CardGrp} from '../CardGrp/CardGrp'
import {AddButton} from "../AddButton/AddButton";

export function Body ({GrpAutreTab, GrpCompTab, GrpFondTab}){
    return <View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Groupe Fondamental</Text>
            <CardGrp Tab={GrpFondTab}/>
        </View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Groupe Complémentaire</Text>
            <CardGrp Tab={GrpCompTab}/>
        </View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Autres</Text>
            <CardGrp Tab={GrpAutreTab}/>
        </View>
    </View>;
}