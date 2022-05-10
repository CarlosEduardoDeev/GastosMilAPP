import react from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import * as Animatable from "react-native-animatable"
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();


    return(
        <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image animation="flipInY"  source={require('../../Assets/Logo.png')} style={{width:200, height:200}} resizeMode="contain" />
        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title} > Veja como é facil consultar seus gastos do dia a dia!</Text>
            <Text style={styles.text}> Começe agora mesmo!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </Animatable.View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a67e'
    },
    containerLogo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:"white",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        paddingStart:'4%',
        paddingEnd:'5%'

    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        marginTop:27,
        marginBottom:12
    },
    text:{
        color:"#a1a1a1"
    },
    button:{
        position:"absolute",
        backgroundColor:"#38a67e",
        borderRadius:50,
        paddingVertical:8,
        width:"60%",
        alignSelf:"center",
        bottom:'15%',
        textAlign:'center',
        alignItems:'center'
    },
    buttonText:{
        color:"#FFF",
        fontWeight:'bold',
        fontSize:18
    }
})