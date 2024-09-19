import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container : {
        borderBottomWidth : 2,
        borderColor : 'black',
        flexDirection : 'row',
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
    },
    Name : {
        flex : 4,
        paddingLeft : 10,
    },
    ECTs : {
        flex : 1,
        textAlign : 'center',
    },
    Note : {
        flex : 1,
        textAlign : 'center',
    }, ECTsTxt : {
        textAlign : 'center',
        fontSize : 16,
    }, noteTxt : {
        textAlign : 'center',
        fontSize : 16,
    }, txtName : {
        fontSize : 16,
    }
})