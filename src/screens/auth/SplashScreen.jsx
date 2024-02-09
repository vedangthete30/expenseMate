import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 2000)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 400, width: 400 }} source={require('../../assets/splash/emlogo.png')} />
        </View>
    )
}

export default SplashScreen