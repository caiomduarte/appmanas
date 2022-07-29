import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function ConfigPJ() {

    const navigation = useNavigation();

    //Criando as variaveis para receber o dados da tela
    let [nome, setNome] = useState();
    let [email, setEmail] = useState();
    let [contato, setContato] = useState();
    let [senha, setSenha] = useState();
    let [confirmarpws, setPws] = useState();
    let [empresa, setEmpresa] = useState();
    let [cnpj, setCnpj] = useState();
    let [descricao, setDescricao] = useState();

    //Criando a função para cadastrar um usuario no banco de dados
 async function CadastrarUsuarioPJ(){      

                       
    let response = await api.post('cadastro-pj.php', {
                    empresa:  empresa,
                    cnpj: cnpj,
                    descricao: descricao
                })
                .then(function (response) {
                    Alert.alert("Usuário Cadastrado com sucesso!");              
                    navigation.navigate('PerfilBusiness')
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

                <View style={styles.campoTitle}>
                    <Image style={styles.img} source={require('../assets/mais.png')}/>
                    <Text style={styles.title}>DADOS PESSOAIS</Text>
                </View>
                

                <TextInput 
                    onChangeText={value => setEmpresa}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Empresa" 
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
                    onChangeText={value => setCnpj}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="CNPJ" 
                />

                <TextInput 
                    onChangeText={value => setDescricao}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Descrição" 
                    numberOfLines={6} multiline
                />

                <View style={styles.campoTitle}>
                    <Image style={styles.img} source={require('../assets/mais.png')}/>
                    <Text style={styles.title}>SENHA</Text>
                </View>
                
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

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PerfilBusiness')}>
                    <Text style={styles.textButton}>ATUALIZAR</Text>
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
        textAlign:'left',
        paddingTop:'15%',
    },

    title: {
        color:'#FCFBFE',
        fontSize:18,
        left:5,
    },

    campoTitle:{
        marginBottom:'10%',
        marginTop:'5%',
        flexDirection:'row',
    },

    img: {
        width:30, 
        height:30,
        borderRadius: 100,      
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
        marginBottom:'30%',
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