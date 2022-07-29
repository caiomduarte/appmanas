import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Keyboard} from "react-native";


//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function CadastroPF() {

    const navigation = useNavigation();

    //Criando as variaveis para receber o dados da tela
   
    let [email, setEmail] = useState('');
    let [contato, setContato] = useState('');
    let [nascimento, setNascimento] = useState('');
    let [cnpj, setCnpj] = useState('');
    let [formacao, setFormacao] = useState('');
    let [experiencia, setExperiencia] = useState('');
    let [competencia, setCompetencia] = useState('');
    let [endereco, setEndereco] = useState('');
    let [numero, setNumero] = useState('');
    let [bairro, setBairro] = useState('');
    let [cidade, setCidade] = useState('');
    let [uf, setUF] = useState('');
    let [senha, setSenha] = useState('');
    let [confirmarpws, setPws] = useState('');
    let [cep, setCep] = useState();
    let [complemento, setComplemento] = useState('');

    let [empresa, setEmpresa] = useState('');
    let [descricao, setDescricao] = useState('');

 async function buscaEndereco({valor}) {

     let cepusuario = valor;
  
     try{

    let response =  await api.get('https://viacep.com.br/ws/' +cepusuario+'/json/');
 

    setCep(response.data);
    //console.log(cep.logradrouro);
    //setEndereco(cep.logradrouro);
        
    Keyboard.dismiss();
     }

     catch(erro){
        setCep(null);
        Alert.alert("O cep não foi encontrado, por favor preencha manualmente");
     }
 }   

    //Criando a função para cadastrar um usuario no banco de dados
 async function CadastrarUsuarioPJ(){      

                       
    let response = await api.post('cadastro-pj.php', {
                    empresa: empresa,
                    email: email,
                    contato: contato,
                    nascimento:  nascimento,
                    cnpj:cnpj,
                    descricao:descricao,
                    formacao: formacao,
                    experiencia: experiencia,
                    competencia: competencia,
                    senha: senha,
                    endereco: endereco,
                    numero:numero,
                    bairro:bairro,
                    cidade:cidade,
                    uf:uf,
                    complemento: complemento
                   
                })
                .then(function (response) {
                    Alert.alert("Empresa Cadastrada com sucesso!");              
                    //navigation.navigate('Feed');
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
               
                <Text style={styles.title}>Preencha todos os campos</Text>
                <Text style={styles.subtitle}>para criar uma conta</Text>
                <TextInput 
                    onChangeText={setEmpresa}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Nome"
                />
                <TextInput 
                    onChangeText={setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <TextInput 
                    onChangeText={setContato}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Contato"
                    keyboardType="numeric"
                />

                

                <TextInput 
                    onChangeText={setCnpj}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="CNPJ" 
                    
                />

                <TextInput 
                    onChangeText={setDescricao}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Sobre a empresa" 
                    numberOfLines={6} multiline 
                />

           
           
                
                
                <TextInput 
                    onChangeText={setEndereco}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Endereço" 
                   
                />

            <TextInput 
                    onChangeText={setComplemento}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Complemento" 
                   
                />

                <TextInput 
                    onChangeText={setNumero}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Nº" 
                   
                />

                <TextInput 
                    onChangeText={setBairro}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Bairro" 
                   
                />

                <TextInput 
                    onChangeText={setCidade}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Cidade" 
                    
                />

                <TextInput 
                    onChangeText={setUF}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="UF" 
                   
                />

                <TextInput 
                    onChangeText={setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                
  
                <TouchableOpacity style={styles.button} onPress={CadastrarUsuarioPJ}>
                    <Text style={styles.textButton}>CADASTRE-SE</Text>
                </TouchableOpacity>

                <Text style={styles.textRodape} onPress={() => navigation.navigate('LoginPF')}>LOGIN</Text>

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
    },

    title: {
        color:'#FCFBFE',
        fontSize:20,
      
        marginTop:'5%'
    },

    subtitle:{
        color:'#FCFBFE',
        fontSize:15,
        marginBottom:'5%',
     
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
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:50,
        marginBottom:'15%',
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