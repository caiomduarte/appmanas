import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Tarefas() {

    const navigation = useNavigation();

    return (
        <View style={{flex:1,backgroundColor:'#070211'}}>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>NOME PROJETO</Text>
                
                <View style={styles.blocoTarefa}>
                    <Text style={styles.text}>PENDENTE</Text>
                    <View style={styles.task}>
                        <Text style={styles.text}>6 Tarefa</Text>
                        <Text style={styles.text}>7 Tarefa</Text>
                        <Text style={styles.text}>8 Tarefa</Text>
                    </View>
                    

                    <Text style={styles.text}>EM PROCESSO</Text>
                    <View style={styles.task}>
                        <Text style={styles.text}>3 Tarefa</Text>
                        <Text style={styles.text}>4 Tarefa</Text>
                        <Text style={styles.text}>5 Tarefa</Text>
                    </View>

                    <Text style={styles.text}>CONCLUÍDO</Text>
                    <View style={styles.task}>
                        <Text style={styles.text}>2 Tarefa</Text>
                        <Text style={styles.text}>1 Tarefa</Text>
                    </View>
                </View>

            </View>
            </ScrollView>

            <TouchableOpacity style={styles.btnCadTarefa} onPress={() => navigation.navigate('CadTarefa')}>
                <Text style={styles.txtBtnT}>+</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor:'#070211',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        textAlign:'justify',
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'10%',
        marginTop:'10%'
    },

    tituloTarefa:{
        fontSize:20,
        textAlign:'center',
        marginTop:'12%',
        marginBottom:'15%',
    },

    blocoTarefa:{
        width:'80%',
        marginBottom:'10%',
    },

    text:{
        fontSize:16,
        marginTop:15,
        textAlign:'justify',
        color:'#FCFBFE',
    },

    task:{
        width:'100%',
        borderWidth:2,
        borderTopColor:'#4B484D',
        borderBottomColor:'#070211',
        borderLeftColor:'#070211',
        borderRightColor:'#070211',
        marginBottom:'15%',
        color:'#FCFBFE',
    },

    button: {
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:20,
        marginBottom:'15%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    btnCadTarefa: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom:30,
        borderRadius:50,
        backgroundColor:'#6E5581',
      },

      txtBtnT:{
        fontSize:30,
        color:'#FCFBFE',
      }
})