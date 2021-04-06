import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    title: string,
    btnColor?: string,
    textColor?: string,
    ancho?: Boolean
    onPress: ( numeroTexto: string ) => void
}

export const BotonCalc = ({ title, btnColor = 'oscuro', textColor = 'blanco', ancho = false, onPress }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={ .6 }
            onPress={ () => onPress( title ) }
        >
            <View style={[,
                styles.boton,
                    btnColor === 'naranja' ?  styles.botonNaranja : btnColor === 'gris' ? styles.botonGris : styles.boton,
                    ancho ? styles.botonAncho : null
                ]}>
                <Text style={[
                    styles.botonTexto,
                    textColor === 'oscuro' ? styles.botonTextoGris : styles.botonTexto,
                ]}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}
