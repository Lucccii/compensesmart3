import {Button, Text, TouchableOpacity, View} from "react-native";
import {s} from './AddButton.style'

export function AddButton({addLine}){
    return <View style={s.container}>
        <View style={s.button}>
            <TouchableOpacity onPress={() => {addLine()}} title={''}>
                <Text style={s.txt}>Ajouter une ue</Text>
            </TouchableOpacity>
        </View>
    </View>
}