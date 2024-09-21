import {Alert, TextInput} from "react-native";
import {s} from './TabLine.style'
import {View} from "react-native";

export function TabLine({ue, updateLine}) {
    const onChangeTextVerif = (ue, newText, type) => {
        if (newText > 20 || newText < 0) {
            Alert
        } else {
            updateLine(ue, newText, type)
        }
    }
    //console.log("In TabLine my tab = ")
    //console.log(ue)
    return <View style={s.container}>
        <TextInput defaultValue={ue.Name} style={s.nameInput} placeholder={'Algebre'} onChangeText={(newText) => onChangeTextVerif(ue, newText, 'Name')}/>
        <TextInput defaultValue={ue.NPlanche} keyboardType="numeric" style={s.NPlanche} placeholder={'7'} onChangeText={(newText) => updateLine(ue, newText, 'NPlanche')}/>
        <TextInput defaultValue={ue.ECTs} keyboardType="numeric" style={s.ECTS} placeholder={'3'} onChangeText={(newText) => updateLine(ue, newText, 'ECTs')}/>
        <TextInput defaultValue={ue.Note} keyboardType="numeric" style={s.Note} placeholder={'12'} onChangeText={(newText) => updateLine(ue, newText, 'Note')}/>
        </View>
}