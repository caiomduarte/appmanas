import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function VagasBusiness(props) {
    return (
        <View style={styles.blocoPublicacao}>
            <View style={styles.campoText}>
                <View style={styles.vagaBusiness}>
                    <Image style={styles.img} source={require('../assets/mais.png')}/>
                    <Text style={styles.titlePJ}>{props.empresa}</Text>
                </View>
                
                <Text style={styles.textPj}>{props.title}</Text>
                <Text style={styles.descricaoPj}>{props.description}</Text>
            </View>
            
            <View style={styles.campoBotaoPj}>
                <TouchableOpacity style={styles.botaoPj}>
                    <Text style={styles.textBotaoPj}>INSCREVER-SE</Text>
                </TouchableOpacity>
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

  

    botaoPj:{
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        paddingVertical:15,
        marginHorizontal:20,
        marginTop:20,
        flexDirection:'row',
    },

    campoBotaoPj:{
        marginBottom:'2%',
    },

    textBotaoPj:{
        color:'#FCFBFE',
        fontSize:10,
    },

    campoText:{
        padding:'5%',
    },

    vagaBusiness:{
        flexDirection:'row',
        alignItems:'center', 
        paddingBottom:10, 
    },

    textPj:{
        color:'#FCFBFE',
        fontSize:14,
    },

    titlePJ:{
        color:'#FCFBFE',
        fontSize:18,
        textAlign:'center',
        marginLeft:5,
    },

    descricaoPj:{
        color:'#FCFBFE',
        fontSize:14,
        marginTop:'2%',
        textAlign:'justify',        
    },

    img: {
        width:30, 
        height:30,
        borderRadius: 100,      
    },
    
});