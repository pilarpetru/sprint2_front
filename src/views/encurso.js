import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import MyButton from './my_button';

export function encurso(props) {

    return (
        <View>
            <Image style={{ width: 250, height: 250, alignItems: 'center' }} source={require('../assets/def.png')} />
            <Text>Hi-Go!</Text>

            <Text>Viaje en curso</Text>
            <MyButton
                onPress={() => props.navigation.navigate("resumen")}
                text={"Finalizar"} />

        </View>
    );
};

export default encurso;