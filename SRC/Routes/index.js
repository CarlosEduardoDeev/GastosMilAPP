import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SingIn from "../Screens/SingIn/index"
import SingUp from '../Screens/SingUp';
import Welcome from "../Screens/Welcome/index"
import Home from "../Screens/Home/Index"

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        
            
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen component={SingUp} name="SingUp" options={{headerShown:false}}/>
            <Stack.Screen component={Welcome} name="Welcome" options={{headerShown:false}}/>
            <Stack.Screen component={Home} name="Home" options={{headerShown:false}}/>
            <Stack.Screen component={SingIn} name="SignIn" options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}