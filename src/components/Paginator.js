import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'



const Paginator = ({ data, scrollX }) => {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];


                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        style={[
                            styles.dot,
                            {
                                width: 12,
                                opacity,
                            },
                        ]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};



export default Paginator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        width: 500,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // Change the background color here
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1E5184',
        marginHorizontal: 8,
    }
})