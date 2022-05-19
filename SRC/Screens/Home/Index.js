
import React, {useState} from "react";
import {View,StyleSheet,Text} from 'react-native'
import Header from '../../Components/Header/index'
import Balance from "../../Components/Balance/index"
import FabButton from "../../Components/FAB/index"







export default function Home(){

   



    return(
        <View style={styles.container}>

            <Header name='Kadu'/>
            <Balance saldos='5000' gastos='4000'/>
            <Text style={styles.title} >últimas atualizações</Text>

            <FabButton  active={() => openmodel(true)} />
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

        paddingStart:12,
        fontWeight:'bold',
        marginTop:14,
        marginRight:14,
        marginLeft:14,

    }
})
