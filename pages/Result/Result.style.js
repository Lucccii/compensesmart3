import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    page : {
        flex : 1,
        padding : 5,
        alignItems : "center"
    }, image : {
        width: 40, // Définir une largeur
        height: 40,
        resizeMode: 'contain',
        marginVertical : 15,
    }, imgContainer : {
        height : "24%",
        width : '90%',
        backgroundColor : "white",
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 60,
        borderRadius : 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }, esultTxtArea: {
        flex: 3,
        padding: 10,
    },
    resultCard: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    resultTitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    resultValue: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }, moyResultValue : {
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            color : 'white',
    },
    valid: {
        color: '#61C555',
    },
    invalid: {
        color: '#ED574D',
    },
    backPageContainer : {
        position :'absolute',
        top : 10,
        left : 0,
        height : 40,
        width : 40,
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center',
    }, validContainer : {
        backgroundColor : "#61C555",
    }, invalidContainer : {
        backgroundColor : "#ED574D",
    }, descpResult : {
        color : "white",
        paddingTop : 5,
    }
})