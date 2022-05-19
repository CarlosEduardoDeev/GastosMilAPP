
import React, {useState} from "react";
import {View,StyleSheet,Text} from 'react-native'
import Header from '../../Components/Header/index'
import Balance from "../../Components/Balance/index"
import FabButton from "../../Components/FAB/index"
import { Modal,Button,IconButton, Colors,TextInput } from 'react-native-paper';







export default function Home(){

    const [openmodel,setOpenModal] = useState(false)


    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = 
    {backgroundColor: 'white', 
    padding: 20, 
    width:300,
    height:500,
    alignItems:'center',
    alignSelf:'center'

 };

    
   



    return(
        <View style={styles.container}>

            <Header name='Kadu'/>
            <Balance saldos='5000' gastos='4000'/>
            <Text style={styles.title} >últimas atualizações</Text>

            <Modal style={styles.modal} visible={openmodel} onDismiss={hideModal} contentContainerStyle={containerStyle}>

               
                <TextInput label="Tipo de gasto" mode='outlined'  />
                <IconButton icon="check-circle" color={Colors.green500} size={30} onPress={() => setOpenModal(false)}/>

            </Modal>

            <FabButton  active={ () => setOpenModal(true)} />
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
