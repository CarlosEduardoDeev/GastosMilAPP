import React from "react";
import {View,StyleSheet,Text,StatusBar} from 'react-native'
import Header from '../../Components/Header/index'




export default function Home(){
    return(
        <View style={styles.container}>
            <Header name='Kadu'/>
        <Text> header</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    }

})