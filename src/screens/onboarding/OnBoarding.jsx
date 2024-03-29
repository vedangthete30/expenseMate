import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import slides from '../../../slides'
import OnBoardingItem from '../../components/OnBoardingItem'
import Paginator from '../../components/Paginator'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    console.log(scrollX);
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <AnimatedFlatList
                    data={slides} renderItem={({ item }) => <OnBoardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}

                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})