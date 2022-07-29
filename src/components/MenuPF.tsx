import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import MenuUserPF from '../pages/MenuUserPF';

export default function MenuPF() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.navigate('MenuPF')}>
            <Feather
            name="menu"
            size={24}
            color="#000"
            />
        </TouchableOpacity>
    );
}