import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from '../components/CheckBox';


//Importante o arquivo API
import api from '../services/api';

export default function CadTarefa() {

    const navigation = useNavigation();

      const [pendente, setPendente] = useState(false);
      const [processo, setProcesso] = useState(false);
      const [concluido, setConcluido] = useState(false);

    return (
        <View style={{flex:1,backgroundColor:'#070211'}}>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>NOVA TAREFA</Text>

                <TextInput 
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Tarefa"
                />

                <View style={styles.status}>
                    <Text style={styles.subtitle}>STATUS:</Text>

                    <CheckBox
                        onPress={() => setPendente(!pendente)}
                        title="Pendente"
                        isChecked={pendente}
                    />
                    <CheckBox
                        onPress={() => setProcesso(!processo)}
                        title="Em Processo"
                        isChecked={processo}
                    />
                    <CheckBox
                        onPress={() => setConcluido(!concluido)}
                        title="Concluído"
                        isChecked={concluido}
                    />    
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tarefas')}>
                    <Text style={styles.textButton}>CADASTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tarefas')}>
                    <Text style={styles.textButton}>CANCELAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'20%',
        marginTop:'20%'
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
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    status:{
        flexDirection:'column',
        width:'80%',
        
    },

    subtitle: {
        color:'#FCFBFE',
        fontSize:18,
        marginVertical:15,
        textAlign:'justify',
    },

})