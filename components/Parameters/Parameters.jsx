import {s} from './Parameters.style'
import {Text, View} from "react-native";

export function Parameters({}){
    return <View style={s.container}>
        <View style={s.Name}><Text style={s.txtName}>Nom</Text></View>
        <View style={s.ECTs}><Text style={s.ECTsTxt}>ECTS</Text></View>
        <View style={s.Note}><Text style={s.noteTxt}>Note</Text></View>
    </View>
}