import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    footer : {
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
        height : "12%",
        width : "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }, button : {
        width : 270,
        height : 65,
        marginBottom : 10,
        backgroundColor : 'black',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : "center"
    }, txt : {
        color : "white",
        fontSize : 20,
        fontFamily : "SFProRegular",
    }
})