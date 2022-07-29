import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

export default function Equipe() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>NOME PROJETO</Text>
            
            <View style={styles.campoimg}>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.batepapo}>
                        <Image style={styles.icon} source={require('../assets/icon-chat.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-tel.png')}/>
                        <Image style={styles.icon} source={require('../assets/icon-can.png')}/>
                    </View>
                </View>

            </View>

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
        marginBottom:'2%',
        marginTop:'10%'
    },    

    campoimg: {
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        padding:'5%',
        marginTop:'10%'
    },

    bperfil: {
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginBottom: 30,
    },

    butonP:{
        flexDirection:'row',
        alignItems:'center',
    },
    
    img: {
        width:65, 
        height:65,
        borderRadius: 100,        
    },

    batepapo:{
        flexDirection:'row'
    },

    icon: {
        width:40, 
        height:40,
        borderRadius: 100,  
        marginLeft:7,      
    },
    
    nomeUser: {
        color:'#FCFBFE',
        fontSize:20,
        padding:'5%',
        marginLeft:2,
        textAlign:'center',
    },

});