import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import OnBoarding from '../screens/onboarding/OnBoarding';

const Stack = createNativeStackNavigator();


const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='OnBoarding' component={OnBoarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation