import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SingIn from "../Screens/SingIn/index"
import Welcome from "../Screens/Welcome/index"

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        
            
        <Stack.Navigator>
            <Stack.Screen component={Welcome} name="Welcome" options={{headerShown:false}}/>
            <Stack.Screen component={SingIn} name="SignIn" options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}