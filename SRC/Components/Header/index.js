import React from "react";
import {View,StyleSheet,Text,StatusBar,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 50;

export default function Header({name}){
    return(
        <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.username}>Seja bem vindo, {name}</Text>

                    <TouchableOpacity style={styles.ButtonUser} activeOpacity={0.9}>
                        <Feather name="user" size={27} color='#fff'/>
                    </TouchableOpacity>
                </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#38a67e',
        paddingTop:statusBarHeight,
        flexDirection:'row',
        paddingStart:16,
        paddingBottom:44,
        paddingEnd:16,
    },
    content:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',

    },
    ButtonUser:{
        width:44,
        height:44,
        backgroundColor:'rgba(255,255,255,0.2)',
        alignItems:'center',
        borderRadius:44,
        justifyContent:'center'
    }
    
})