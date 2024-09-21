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
    }, NPlanche : {
        flex : 1,
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

    }, NPlancheTxt : {
        fontSize : 16,
        textAlign : "center",
    }
})