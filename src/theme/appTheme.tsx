import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        
    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        fontSize: 60,
        color: '#fff',
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    fils: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonNaranja: {
        backgroundColor: '#ff9427', 
    },
    botonGris: {
        backgroundColor: '#9b9b9b', 
    },
    botonAncho: {
        width: 180
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: '300'
    },
    botonTextoNaranja: {
        color: 'black',
    },
    botonTextoGris: {
        color: 'black',
    }
    
})