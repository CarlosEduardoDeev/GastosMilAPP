import React from "react";
import {useNavigation} from '@react-navigation/native'
import {View,Text,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native'
import * as Animatable from "react-native-animatable"




export default function SingIn(){

    const navigation = useNavigation();


    return(
       <KeyboardAvoidingView enabled behavior="position" style={styles.containerView}>
        <View style={styles.container} behavior="height" enabled>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}> Cria sua Conta !</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInDown" style={styles.containerForm}>
            <Text style={styles.title}>Name</Text>

            <TextInput
            style={styles.input}
            placeholder="Digite seu Name"
            />

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
              <Text style={styles.title}>Confirma Senha </Text>

            <TextInput
                style={styles.input}
            placeholder="Digite sua Senha novamente"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}> Criar</Text>
            </TouchableOpacity>


            {/* <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SingUp')}>
                <Text style={styles.registerText}> Não possue uma conta, Cadastre-se</Text>
            </TouchableOpacity> */}


        </Animatable.View>
        </View>
        </KeyboardAvoidingView>  
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a67e',
        
        

    },
    containerView:{
        position:"absolute",
        backgroundColor:"#fff",
        width:'100%',

        
        
    },
    containerHeader:{
        marginTop:"9%",
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
        padding:"6%",

     
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