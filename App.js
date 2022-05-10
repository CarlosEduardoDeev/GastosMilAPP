import react from "react";
import Rotas from './SRC/Routes/index'
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from "react-native"
export default function App(){

  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#38a67e" barStyle="light-content" />
      <Rotas/>
    </NavigationContainer>
  )
}