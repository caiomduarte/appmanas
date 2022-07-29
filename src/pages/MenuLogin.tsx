import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MenuLogin() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <RectButton style={styles.campotitle1} onPress={() => navigation.navigate('CadastroPJ') }>
                <Text style={styles.title}> EMPRESA </Text>
            </RectButton>

            <RectButton style={styles.campotitle}  onPress={() => navigation.navigate('CadastroPF')}>
                <Text style={styles.title}> PROFISSIONAL </Text>
            </RectButton>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#070211',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:"50%",
        paddingBottom:"60%"
    },

    campotitle1: {
        marginBottom: 30,
        marginTop:30,
        borderRadius:20,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:90,
        paddingVertical: 15,
    },

    campotitle: {
        marginBottom: 30,
        marginTop:30,
        borderRadius:20,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:70,
        paddingVertical: 15,
    },


    title: {
        color: '#FEFEFE',
        fontSize: 20
    }

});