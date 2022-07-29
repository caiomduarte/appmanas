import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

export default function Candidatos() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>NOME DO PROJETO</Text>
            
            <View style={styles.campoimg}>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>
                
                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
                    </View>
                </View>

                <View style={styles.bperfil}>
                    <RectButton style={styles.butonP} onPress={() => navigation.navigate('Perfil') }>
                        <Image style={styles.img} source={require('../assets/user.png')}/>
                        <Text style={styles.nomeUser} >Ana Clara</Text>
                    </RectButton>
                    <View style={styles.aprovador}>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/no.png')}/>
                        </RectButton>
                        <RectButton style={styles.btnIcon}>
                            <Image style={styles.icon} source={require('../assets/ok.png')}/>
                        </RectButton>
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
        width:'70%',
    },
    
    img: {
        width:65, 
        height:65,
        borderRadius: 100,        
    },

    aprovador:{
        flexDirection:'row',
        width:'30%',
        alignItems:'baseline',
    },

    icon: {
        width:30, 
        height:30,
        borderRadius: 100,    
    },

    btnIcon:{
        marginLeft:17,
    },
    
    nomeUser: {
        color:'#FCFBFE',
        fontSize:20,
        padding:10,
        marginLeft:2,
        textAlign:'center',
    },

});