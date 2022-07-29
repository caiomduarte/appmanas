import React from 'react';
import { View, Text, StyleSheet, Image} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function MenuUserPJ() {

    const navigation = useNavigation();

    return (
    
        <View style={styles.container}>
            <View style={styles.campoimg}>
                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('PerfilBusiness') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Info Tec</Text>
                </RectButton>
            </View>
            <View style={styles.campoTextMenu}>
                <RectButton style={styles.btnMenu} onPress={() => navigation.navigate('Feed') }>
                    <Text style={styles.textMenu} >Feed</Text>
                </RectButton>
                 <RectButton style={styles.btnMenu} onPress={() => navigation.navigate('Meus Projetos') }>
                    <Text style={styles.textMenu}>Meus Projetos</Text>
                </RectButton>
                <RectButton style={styles.btnMenu} onPress={() => navigation.navigate('ConfigPJ') }>
                    <Text style={styles.textMenu}>Configuração</Text>
                </RectButton>
                <RectButton style={styles.btnMenu} onPress={() => navigation.navigate('Business Code') }>
                    <Text style={styles.textMenu}>Sair</Text>
                </RectButton>
            </View>
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
    },
    
    campoimg: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:'5%',
        marginTop:'10%'
    },

    bperfil: {
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
    },
    
    img: {
        width:120, 
        height:120,
        borderRadius: 100,        
    },
    
    nomeUser: {
        color:'#FCFBFE',
        fontSize:20,
        padding:'5%',
        marginLeft:'3%',
    },
    
    campoTextMenu:{
        marginTop:'5%',
        paddingBottom:'50%',
        width:'100%',
        
    },
    
    btnMenu:{
        paddingVertical:'7%',
    },

    textMenu: {
        color:'#FCFBFE',
        fontSize:16,
        textAlign:'center',
    }, 
    
    });