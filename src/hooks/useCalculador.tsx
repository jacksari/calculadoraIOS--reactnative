import React, { useState, useRef } from 'react'

enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const useCalculador = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('100');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if( numero.includes('.') && numeroTexto === '.' ) return;
        if( numero.startsWith('0') || numero.startsWith('-0') ){
            // Punto decimal
            if( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto )
                // Evaluar si es otro cero y hay un punto
            } else if(numeroTexto === '0' && numero.includes('.')) {
                setNumero( numero + numeroTexto )
                // Evaluar si es diferente de 0 y no tiene un punto
            } else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto)
            } else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero)
            } else{
                setNumero( numero + numeroTexto )
            }


        } else{
            setNumero( numero + numeroTexto )
        }
    }

    const deleteNumero = () => {
        if(numero.length == 1 || (numero.length === 2 && numero.includes('-')) || (numero.length === 3 && numero.includes('0.')) || (numero.length === 4 && numero.includes('-0.'))){
            setNumero( '0' )
        }else{
            setNumero( numero.slice(0,-1) )
        }
    }

    const positivoNegativo = () => {
        if( numero.includes('-') ){
            setNumero( numero.replace('-', '') )
        }else{
            setNumero( '-' + numero )
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if(numero === '0') return;
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir;
        calcularSigno()
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar;
        calcularSigno()
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar;
        calcularSigno()
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.resta;
        calcularSigno()
    }

    const calcular = () => {
        if(numeroAnterior === '0') return;
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        //console.log('num', numeroAnterior);
            
        switch( ultimaOperacion.current ){
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` )
                break;
            case Operadores.resta:
                setNumero( `${ num2 - num1 }` )
                break;        
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` )
                break;
            case Operadores.dividir:
                setNumero( `${ num2 / num1 }` )
                break;        
        }
        setNumeroAnterior('0')
    }

    const calcularSigno = () => {
        if(numeroAnterior === '0') return;
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        //console.log('num', numeroAnterior);

        switch( ultimaOperacion.current ){
            case Operadores.sumar:
                setNumero( '0' )
                setNumeroAnterior(`${ num1 + num2 }`)
                break;
            case Operadores.resta:
                setNumero( '0' )
                setNumeroAnterior( `${ num2 - num1 }` )
                break;        
            case Operadores.multiplicar:
                setNumero( '0' )
                setNumeroAnterior( `${ num1 * num2 }` )
                break;
            case Operadores.dividir:
                setNumero( '0' )
                setNumeroAnterior( `${ num2 / num1 }` )
                break;        
        }
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        deleteNumero,
        positivoNegativo,
        cambiarNumeroPorAnterior,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        calcular,
        calcularSigno
    }
}
