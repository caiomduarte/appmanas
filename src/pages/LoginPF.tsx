import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';
import { set } from 'react-native-reanimated';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPF() {

    const navigation = useNavigation();

    //Criando os states
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //Fazer Tela Cadastro
    function goCadastro()
    {
        navigation.navigate('MenuLogin')
    }


    //Fazer Login
    function goLogin()
    {
        navigation.navigate('Perfil')
    }


    //Função que efetua o login
  async function loginUser(){
   
      
    console.log("clicou");
                       
    let response = await api.post('login-usuario.php', {
                    email: email,
                    senha: senha
                })
                .then(function (response) {
                   
                    //Verificando o valor da variavel mensagem enviada pelo php
                    if(response.data[0] == 'Logado com Sucesso!'){

                        Alert.alert("Login realizado com sucesso!");

                        //Salva dados o asyncStorage
                        AsyncStorage.setItem('@idusuario', response.data[1]);
                        
                        //console.log(response.data);
                        navigation.navigate('Feed')
                     }
 
                     else if(response.data == 'Erro ao logar')
                       Alert.alert("E-mail ou senha incorreto, tente novamente");
                      
                    console.log(response);
                   
                })
                .catch(function (error) {
                    Alert.alert("Erro ao cadastrar, tente mais tarde!");    
                    console.log(error);
                });
  
     
   }
 


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Seja bem vindo de volta!</Text>
                <Text style={styles.subtitle}>Preencha os campos para entrar</Text>

                <TextInput 
                    onChangeText={setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    onChangeText={setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={goCadastro}>
                    <Text style={styles.textoLink}>Criar uma conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.textButton}>ACESSAR</Text>
                </TouchableOpacity>

              
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor:'#070211',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'1%',
        marginTop:'30%',
        fontWeight: 'bold'
    },
    subtitle:{
        color:'#FCFBFE',
        fontSize:15,
        marginBottom: 50     
    },

    textoLink:{
        color:'#6E5581',
        fontSize:16,
        marginBottom: 50,
        fontWeight:'bold'
    },

    
    campoForm: {
        padding:10,
        borderColor:'#68656A',
        width:'80%',
        borderBottomWidth:2,
        backgroundColor:'#FCFBFE',
        fontSize:16,
        borderRadius:20,
        marginBottom:'5%',
    },

    button: {
        width:300,
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:50,
        marginBottom:'50%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    textRodape: {
        marginTop:'15%',
        color:'#FCFBFE',
        fontSize:14,
        marginBottom:15
    }

})