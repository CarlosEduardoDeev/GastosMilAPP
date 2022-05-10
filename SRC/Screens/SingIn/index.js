import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import * as Animatable from "react-native-animatable"

export default function SingIn(){
    return(
        <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}> Bem Vindo!</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>

            <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            />

             <Text style={styles.title}>Senha</Text>

            <TextInput
                style={styles.input}
            placeholder="Digite sua Senha"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}> Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}> Não possue uma conta, Cadastre-se</Text>
            </TouchableOpacity>


        </Animatable.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a67e',

    },
    containerHeader:{
        marginTop:"14%",
        marginBottom:"8%"

    },
    message:{
        fontSize:28,
        color:"#fff",
        fontWeight:"bold",
        padding:"5%"
    },
    containerForm:{
        backgroundColor:"#fff",
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        padding:"7%"
    },
    title:{
        marginTop:20,
        fontSize:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
    },
    button:{
        backgroundColor:'#38a67e',
        width:"100%",
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
    

    },
    buttonTitle:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:"center",


    },
    registerText:{
        color:'#a1a1a1'
    }


})