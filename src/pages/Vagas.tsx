import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import VagasBusiness from '../components/VagasBusiness';

export default function Vagas() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.campoTop}>
                    <TextInput style={styles.pesquisa} placeholder="Pesquisar"/>
                </View>

               <VagasBusiness
                empresa="NOME EMPRESA"
                title="Nome do Curso"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />

                <VagasBusiness
                empresa="NOME EMPRESA"
                title="Python Básico"
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#070211',
    },

    campoTop:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        marginBottom:25,
    },

    pesquisa:{
        width:'80%',
        paddingVertical:5,
        paddingHorizontal:13,
        borderRadius:15,
        backgroundColor:'#FCFBFE',
        marginBottom:2,
    },

    
    
});