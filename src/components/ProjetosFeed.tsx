import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ProjetosFeed(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.blocoPublicacao}>
            <View style={styles.campoimg}>
                <Image style={styles.img} source={props.imgUser}/>
                <Text style={styles.nomeUser}>{props.name}</Text>
            </View>
            <View style={styles.campoBotaoPj}>
                <TouchableOpacity style={styles.botaoPj} onPress={() => navigation.navigate('EntrarProject')}>
                    <Text style={styles.textBotaoPj}>CADASTRAR-SE</Text>
                    <Image style={styles.imgBotao} source={require('../assets/mais.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.campoText}>
                <Text style={styles.textPj}>{props.title}</Text>
                <Text style={styles.descricaoPj}>{props.description}</Text>
            </View>
            <View style={styles.campoImgPj}>
                <Image style={styles.imgPj} source={require('../assets/fundo.png')}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    
    blocoPublicacao:{
        paddingVertical:'5%',
        paddingBottom:'10%',
        borderTopWidth:2,
        borderTopColor:'#4B484D',
    },

    campoimg: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:'5%',
    },

    img: {
        width:60, 
        height:60,
        borderRadius: 100,        
    },

    nomeUser: {
        color:'#FCFBFE',
        fontSize:16,
        paddingLeft:'5%',
    },

    botaoPj:{
        borderWidth:2,
        borderRadius:15,
        borderColor:'#4B484D',
        paddingHorizontal:'4%',
        paddingVertical:'1.5%',
        width:'55%',
        marginLeft:'40%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },

    campoBotaoPj:{
        marginBottom:'2%',
    },

    textBotaoPj:{
        color:'#FCFBFE',
        fontSize:10,
    },

    imgBotao:{
        width:30,
        height:30,
        marginLeft:5,
    },

    campoText:{
        padding:'5%',
    },

    textPj:{
        color:'#FCFBFE',
        fontSize:14,
    },

    descricaoPj:{
        color:'#FCFBFE',
        fontSize:14,
        marginTop:'2%',
        textAlign:'justify',        
    },

    campoImgPj:{
        paddingHorizontal:'5%'
    },

    imgPj:{
        width:'100%',
        height:150,
    },
    
});