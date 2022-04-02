import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import MyButton from './my_button';

export function resumen(props) {

    return (
        <View>
            <Image style={{ width: 250, height: 250, alignItems: 'center' }} source={require('../assets/def.png')} />
            <Text>Hi-Go!</Text>

            <Text>Resumen del viaje</Text>

        </View>
    );
};

export default resumen;