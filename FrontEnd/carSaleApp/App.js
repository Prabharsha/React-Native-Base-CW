
import React from 'react'
import SignUpPage from './screens/SignUpPage'
import LandingPage from './screens/LandingPage'
import SignInPage from './screens/SignInPage'
import LoadAllVehicles from './screens/LoadAllVehicles'
import AddCar from './screens/AddCar'

import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { LogBox } from 'react-native';

 
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
 
//Ignore all log notifications
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="LandingPage" component={LandingPage}/>
      <Stack.Screen name="SignUpPage" component={SignUpPage}/>
      <Stack.Screen name="SignInPage" component={SignInPage}/>
      <Stack.Screen name="LoadAllVehicles" component={LoadAllVehicles}/>
      <Stack.Screen name="AddCar" component={AddCar}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <LandingPage/>
    // <SignUpPage/>
    // <SignInPage />
    // <AddCar/>
    // <LoadAllVehicles/>

    
  )
}
