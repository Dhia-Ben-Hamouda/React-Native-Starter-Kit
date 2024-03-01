import React from "react";
import Animated, { Extrapolation, SharedValue, interpolate, interpolateColor } from "react-native-reanimated";
import { styles } from "../extra/styles";
import { useAnimatedStyle } from "react-native-reanimated";
import { SCREEN_WIDTH } from "../../../utils/dimensions";

interface IDot {
    offset: SharedValue<number>;
    index: number;
}

export default function Dot({ offset, index }: IDot): React.ReactElement {
    const animatedStyles = useAnimatedStyle(() => {
        const width = interpolate(
            offset.value,
            [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
            [10, 25, 10],
            Extrapolation.CLAMP
        )

        const backgroundColor = interpolateColor(
            offset.value,
            [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
            ["#777", "black", "#777"],
        )

        return {
            width,
            backgroundColor
        }
    })

    return (
        <>
            <Animated.View style={[styles.dot, animatedStyles]} />
        </>
    )
}