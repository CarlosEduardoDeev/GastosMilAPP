import React,{useState} from "react";
import {useNavigation} from '@react-navigation/native'





export default function SingIn(){


    const navigation = useNavigation();


    return(
        <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            
            <Text style={styles.message}> Seja bem vindo, {name}!</Text>
            <IconButton icon="profile" color={Colors.white} size={20} onPress={() => console.log('Pressed')}
  />

        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <FabButton/>


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
        marginTop:"2%",
        marginBottom:"2%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'

    },
    message:{
        fontSize:18,
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