import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import Inicio from "./pages/Inicio";
import MenuLogin from "./pages/MenuLogin";
import LoginPF from "./pages/LoginPF";
import LoginPJ from "./pages/LoginPJ";
import Perfil from "./pages/Perfil";
import Projetos from "./pages/Projetos";
import Feed from "./pages/Feed";
import MenuPF from "./components/MenuPF";
import MenuPJ from "./components/MenuPJ";
import MyProject from "./pages/MyProject";
import Cadastro from "./pages/xCadastro";
import CadastroPF from "./pages/CadastroPF";
import CadastroPJ from "./pages/CadastroPJ";
import PerfilBusiness from "./pages/PerfilBusiness";
import Tarefas from "./pages/Tarefas";
import Equipe from "./pages/Equipe";
import Curso from "./pages/Cursos";
import Palestras from "./pages/Palestras";
import MenuUserPF from "./pages/MenuUserPF";
import MenuUserPJ from "./pages/MenuUserPJ";
import Vagas from "./pages/Vagas";
import DescricaoProject from "./pages/DescricaoProject";
import CadProjeto from "./pages/CadProjeto";
import CadTarefa from "./pages/CadTarefa";
import EntrarProject from "./pages/EntrarProject";
import ConfigPF from "./pages/ConfigPF";
import ConfigPJ from "./pages/ConfigPJ";
import CadFeed from "./pages/CadFeed";
import Candidatos from "./pages/CandidatosProject";

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Business Code" component={LoginPF} />

                <Stack.Screen 
                name="MenuLogin" 
                component={MenuLogin} 
                options={{
                    title: 'Escolha um tipo de',
                }}
                />

                <Stack.Screen 
                name="MenuPF" 
                component={MenuUserPF} 
                options={{
                    title: 'MENU',
                }}
                />

                <Stack.Screen 
                name="MenuPJ" 
                component={MenuUserPJ} 
                options={{
                    title: 'MENU',
                }}
                />

                <Stack.Screen 
                name="LoginPF" 
                component={LoginPF} 
                options={{
                    title: 'Conta Profissional',
                }}
                />
                
                <Stack.Screen 
                name="LoginPJ" 
                component={LoginPJ} 
                options={{
                    title: 'Conta Business',
                }}
                />

                <Stack.Screen name="Cadastro" component={Cadastro} />

                <Stack.Screen 
                name="CadastroPF" 
                component={CadastroPF} 
                options={{
                    title: 'Conta Profissional',
                }}
                />

                <Stack.Screen 
                name="CadastroPJ" 
                component={CadastroPJ} 
                options={{
                    title: 'Conta Business',
                }}
                />

                <Stack.Screen 
                name="CadProjeto" 
                component={CadProjeto} 
                options={{
                    title: 'CRIAR PROJETO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="DescricaoProject" 
                component={DescricaoProject} 
                options={{
                    title: 'START PROJECT',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Tarefas" 
                component={Tarefas} 
                options={{
                    title: 'TAREFAS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="CadTarefa" 
                component={CadTarefa} 
                options={{
                    title: 'CRIAR TAREFA',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Equipe" 
                component={Equipe} 
                options={{
                    title: 'EQUIPE',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="PerfilBusiness" 
                component={PerfilBusiness} 
                options={{
                    title: 'MEU PERFIL',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPJ/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="ConfigPJ" 
                component={ConfigPJ} 
                options={{
                    title: 'CONFIGURAÇÃO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPJ/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Vagas" 
                component={Vagas} 
                options={{
                    title: 'VAGAS DE EMPREGO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPJ/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    title: 'MEU PERFIL',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="ConfigPF" 
                component={ConfigPF} 
                options={{
                    title: 'CONFIGURAÇÃO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Meus Projetos" 
                component={MyProject} 
                options={{
                    title: 'MEUS PROJETOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Curso" 
                component={Curso} 
                options={{
                    title: 'CURSOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Palestras" 
                component={Palestras} 
                options={{
                    title: 'PALESTRAS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Projetos" 
                component={Projetos} 
                options={{
                    title: 'PROJETOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="EntrarProject" 
                component={EntrarProject} 
                options={{
                    title: 'ENTRAR NO PROJETO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Candidatos" 
                component={Candidatos} 
                options={{
                    title: 'CANDIDATOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="Feed" 
                component={Feed} 
                options={{
                    title: 'FEED',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="CadFeed" 
                component={CadFeed} 
                options={{
                    title: 'PUBLICAÇÃO',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <MenuPF/>
                        </View>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;