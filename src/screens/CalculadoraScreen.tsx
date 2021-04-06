import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculador } from '../hooks/useCalculador';


export const CalculadoraScreen = () => {

    const { 
        numero, 
        numeroAnterior, 
        limpiar, 
        armarNumero, 
        deleteNumero, 
        positivoNegativo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculador()

    return (
        <View style={styles.calculadoraContainer}>
            {
                numeroAnterior !=='0' && <Text style={styles.resultadoPequeno}>{ numeroAnterior }</Text>
            }
            <Text 
                style={styles.resultado}
                numberOfLines={ 1 }
                adjustsFontSizeToFit    
            >{ numero }</Text>

            <View style={styles.fils}>
                <BotonCalc
                    title="C"
                    btnColor='gris'
                    textColor='oscuro'
                    onPress={ limpiar }
                />
                <BotonCalc
                    title="+/-"
                    btnColor='gris'
                    textColor='oscuro'
                    onPress={ positivoNegativo }
                />
                <BotonCalc
                    title="del"
                    btnColor='gris'
                    textColor='oscuro'
                    onPress={ deleteNumero }
                />
                <BotonCalc
                    title="/"
                    btnColor='naranja'
                    textColor='blanco'
                    onPress={ btnDividir }
                />
            </View>
            <View style={styles.fils}>
                <BotonCalc
                    title="7"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="8"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="9"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="X"
                    btnColor='naranja'
                    textColor='blanco'
                    onPress={ btnMultiplicar }
                />
            </View>
            <View style={styles.fils}>
                <BotonCalc
                    title="4"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="5"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="6"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="-"
                    btnColor='naranja'
                    textColor='blanco'
                    onPress={ btnRestar }
                />
            </View>
            <View style={styles.fils}>
                <BotonCalc
                    title="1"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="2"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="3"
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="+"
                    btnColor='naranja'
                    textColor='blanco'
                    onPress={ btnSumar }
                />
            </View>
            <View style={styles.fils}>
                <BotonCalc
                    title="0"
                    onPress={ armarNumero }
                    ancho
                />
                <BotonCalc
                    title="."
                    onPress={ armarNumero }
                />
                <BotonCalc
                    title="="
                    btnColor='naranja'
                    textColor='blanco'
                    onPress={ calcular }
                />
            </View>
        </View>
    )
}
