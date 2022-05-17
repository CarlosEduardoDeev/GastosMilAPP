
import React from "react";
import {View,StyleSheet,Text,StatusBar} from 'react-native'
import Header from '../../Components/Header/index'
import Balance from "../../Components/Balance/index"





export default function Home(){
    return(
        <View style={styles.container}>
            <Header name='Kadu'/>
            <Balance saldos='5000' gastos='4000'/>
            <Text style={styles.title} >últimas atualizações</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    title:{
        fontSize:18,
        
    }
})
