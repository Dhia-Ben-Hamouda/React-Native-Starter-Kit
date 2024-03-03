import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Switch(): React.ReactElement {
    const offset = useSharedValue(0);

    function toggleSwitch() {
        if(offset.value === 0) {
            offset.value = withTiming(30);
        } else {
            offset.value = withTiming(0);
        }
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value }
            ]
        }
    })

    return (
        <>
            <View style={styles.container} >
                <Pressable onPress={toggleSwitch} >
                    <Animated.View style={[styles.circle, animatedStyles]} >

                    </Animated.View>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 65,
        backgroundColor: "white",
        elevation: 1,
        padding: 4,
        borderRadius: 50
    },
    circle: {
        height: 25,
        width: 25,
        backgroundColor: "#555",
        borderRadius: 50
    }
})