import { NativeBaseProvider } from 'native-base'
import React from 'react'
import SignUpPage from './screens/SignUpPage'
import LandingPage from './screens/LandingPage'
import SignInPage from './screens/SignInPage'
import AddCar from './screens/AddCar'

import { NavigationContainer} from '@react-navigation/stack'

export default function App() {
  return (

    <LandingPage/>
    // <SignUpPage/>
    // <SignInPage />
    // <NavigationContainer>
    // <AddCar/>
    // </NavigationContainer>
 
  )
}
