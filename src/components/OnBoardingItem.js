import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const OnBoardingItem = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },

    image: {
        height: '40 %',
        width: '30 %',
        flex: 0.6,
        justifyContent: 'space-around',
        marginBottom: 50,
    },

    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 15,
        color: '#2C3E50',
        textAlign: 'center',
    },

    description: {
        fontWeight: '700',
        color: '#808B96',
        textAlign: 'center',
        paddingHorizontal: 64,
        fontStyle: 'italic',
    },
})