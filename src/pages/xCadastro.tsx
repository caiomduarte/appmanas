import React,  {useState, useEffect} from 'react';

import { View, Alert, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

//Importando o AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Importante o arquivo API
import api from '../services/api';

export default function Cadastro() {

    //const dataKey = '@code:users';

    const navigation = useNavigation();

//Criando as variaveis para receber o dados da tela
  let [nome, setNome] = useState();
  let [email, setEmail] = useState();
  let [contato, setContato] = useState();
  let [senha, setSenha] = useState();
  let [confirmarpws, setPws] = useState();

 //Criando a função para cadastrar um usuario no banco de dados
 async function CadastrarUsuarioPF(){      
  
    console.log(nome);
                       
    let response = await api.post('cadastro-usuer.php', {
                    nome:  nome,
                    email: email,
                    contato: contato,
                    senha: senha,
                    confirmarpws: confirmarpws
                })
                .then(function (response) {
                    Alert.alert("Usuário Cadastrado com sucesso!");              
                    navigation.navigate('Descrição de perfil');
                    console.log(response);
                })
                .catch(function (error) {
                    Alert.alert("Erro ao cadastrar, tente mais tarde!");    
                    console.log(error);
                });
     }

async function CadastrarUsuarioPJ(){      
  
        console.log(nome);
                           
        let response = await api.post('cadastro-usuer.php', {
                        nome:  nome,
                        email: email,
                        contato: contato,
                        senha: senha,
                        confirmarpws: confirmarpws
                    })
                    .then(function (response) {
                        Alert.alert("Usuário Cadastrado com sucesso!");              
                        navigation.navigate('Conta Business')
                        console.log(response);
                    })
                    .catch(function (error) {
                        Alert.alert("Erro ao cadastrar, tente mais tarde!");    
                        console.log(error);
                    });
         }

     

    //Fazer Login
    function goLogin()
    {
        navigation.navigate('Login')
    }



  useEffect(()=>{

  /*   async function loadData(){
      const data = await AsyncStorage.getItem(dataKey);
      
      console.log(JSON.parse(data));
    
    }

    loadData(); */

  },[])


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>CADASTRO</Text>

            
                <TextInput 
                    onChangeText={value => setNome}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Nome"
                />
                <TextInput 
                    onChangeText={value => setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <TextInput 
                    onChangeText={value => setContato}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Contato"
                    keyboardType="numeric"
                />
                <TextInput 
                    onChangeText={value => setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                
                <TextInput 
                    onChangeText={value => setPws}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Conta Business')}>
                    <Text style={styles.textButton}>CONTA BUSINESS</Text>
                </TouchableOpacity>
                   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Descrição de perfil')}>
                    <Text style={styles.textButton}>CADASTRE-SE</Text>
                </TouchableOpacity>

                
                <Text style={styles.textRodape} onPress={goLogin}>LOGIN</Text>
            
        
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
        marginBottom:'20%',
        marginTop:'5%'
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
        marginTop:5,
        marginBottom:'10%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    textRodape: {
        color:'#FCFBFE',
        fontSize:14,
        marginBottom:15
    }

})