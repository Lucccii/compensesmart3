import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container : {
        justifyContent : 'center',
        paddingBottom : 20,
        paddingTop : 10,
        alignItems : "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    button : {
        width : 270,
        height : 65,
        backgroundColor : 'black',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
    }, txt : {
        color : 'white',
        fontSize : 20,
    }
})