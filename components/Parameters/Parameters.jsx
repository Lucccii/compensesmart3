import {s} from './Parameters.style'
import {Text, View} from "react-native";
import {BookContext} from "../../contexts/isIsCleanTabLineRender";
import {useContext} from "react";

export function Parameters({}){
    const {setNTPLDescpIsVisible} = useContext(BookContext)
    return <View style={s.container}>
        <View style={s.Name}><Text style={s.txtName}>Nom</Text></View>
        <View style={s.NPlanche}><Text onPress={() => setNTPLDescpIsVisible(true)} style={s.NPlancheTxt}>NTPL</Text></View>
        <View style={s.ECTs}><Text style={s.ECTsTxt}>ECTS</Text></View>
        <View style={s.Note}><Text style={s.noteTxt}>Note</Text></View>
    </View>
}