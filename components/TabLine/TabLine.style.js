import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'row',
        flex : 1,
    },
    nameInput : {
        flex : 5,
        paddingHorizontal : 5,
    }, ECTS : {
        flex : 1,
        paddingHorizontal : 5,
        textAlign : 'center',
    }, Note : {
        textAlign : 'center',
        flex : 1,
        paddingHorizontal : 5,
    }
})