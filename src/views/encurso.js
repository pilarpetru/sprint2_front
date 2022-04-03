import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';

export function encurso(props) {

    // cambia el estado a libre
    async function changeLibre(id) {
        await fetch(`/vehiculos/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.texto}>Viaje en curso</Text>
                <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/puntos.gif')} />

            </View>
            <TouchableHighlight style={styles.button} onPress={() => {
                props.navigation.navigate("resumen");
                changeLibre();
            }}>
                <Text style={styles.textButton}>Finalizar</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bike: {
        backgroundColor: '#FEFAE0',
        height: 700
    },
    info: {
        // left: 70,
        alignItems: 'center',
        // top: 70,
        marginBottom: 20
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
    },
    button: {
        alignSelf: 'center',
        width: 350,
        height: 60,
        bottom: 15,
        // top: 170,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    textButton: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default encurso;