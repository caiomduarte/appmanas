import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function CadFeed() {

    const navigation = useNavigation();

    return (
        <View style={{flex:1,backgroundColor:'#070211'}}>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>NOVA PUBLICAÇÃO</Text>

                <TextInput 
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Titulo"
                />
                <TextInput
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Descrição" 
                    numberOfLines={6} multiline
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.textButton}>PUBLICAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.textButton}>CANCELAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'20%',
        marginTop:'20%'
    },

    campoForm: {
        borderColor:'#68656A',
        width:'80%',
        borderBottomWidth:2,
        color:'#FCFBFE',
        fontSize:16,
        marginBottom:'10%',
    },

    button: {
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:50,
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },


})