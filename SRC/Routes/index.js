import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SingIn from "../Screens/SingIn/index"
import SingUp from '../Screens/SingUp';
import Welcome from "../Screens/Welcome/index"

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        
            
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen component={SingUp} name="SingUp" options={{headerShown:false}}/>
            <Stack.Screen component={Welcome} name="Welcome" options={{headerShown:false}}/>
            
            <Stack.Screen component={SingIn} name="SignIn" options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}