import {Alert, TextInput} from "react-native";
import {s} from './TabLine.style'
import {View, TouchableWithoutFeedback} from "react-native";

export function TabLine({ue, updateLine, deleteLine}) {
    const onChangeTextVerif = (ue, newText, type) => {
        if (newText > 20 || newText < 0) {
            Alert
        } else {
            updateLine(ue, newText, type)
        }
    }

    const handleKeyPress = (event) => {
        console.log(event.nativeEvent.key)
        if (event.nativeEvent.key === "Backspace" && ue.Name === "") {
            console.log("Hello")
            deleteLine(ue)
        }
    }
    //console.log("In TabLine my tab = ")
    //console.log(ue)
    return <TouchableWithoutFeedback onLongPress={()=> console.log("Bonsoir")}>
            <View style={s.container} onPress={() => console.log("Hello")} >
                <TextInput onKeyPress={(event) => handleKeyPress(event, 'Name')} defaultValue={ue.Name} style={s.nameInput} placeholder={'Algèbre, Python ...'} onChangeText={(newText) => onChangeTextVerif(ue, newText, 'Name')}/>
                <TextInput defaultValue={ue.NPlanche} keyboardType="numeric" style={s.NPlanche} placeholder={'.'} onChangeText={(newText) => updateLine(ue, newText, 'NPlanche')}/>
                <TextInput defaultValue={ue.ECTs} keyboardType="numeric" style={s.ECTS} placeholder={'X'} onChangeText={(newText) => updateLine(ue, newText, 'ECTs')}/>
                <TextInput defaultValue={ue.Note} keyboardType="numeric" style={s.Note} placeholder={'X'} onChangeText={(newText) => updateLine(ue, newText, 'Note')}/>
            </View>
        </TouchableWithoutFeedback>
}