// import React, { PropsWithChildren, useRef } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Animated, { Extrapolation, interpolate, measure, runOnUI, useAnimatedRef, useAnimatedStyle, withTiming } from "react-native-reanimated";
// import { useSharedValue, useDerivedValue } from "react-native-reanimated";

// interface IAccordion {

// }

// export default function Accordion({ children }: PropsWithChildren<IAccordion>): React.ReactElement {
//     const contentRef = useAnimatedRef<Animated.View>();
//     const isOpen = useSharedValue(false);
//     const progress = useDerivedValue(() => isOpen ? withTiming(1) : withTiming(0));
//     const height = useSharedValue(0);

//     function pressHandler() {
//         if(height.value === 0) {
//             runOnUI(() => {
//                 'worklet';

//                 console.log("ferfref")

//                 height.value = withTiming(measure(contentRef)?.height as number);
//             })();
//         } else {
//             height.value = withTiming(0);
//         }
//         isOpen.value = !isOpen.value;
//     }

//     const animatedStyles = useAnimatedStyle(() => {
//         const heightt = interpolate(
//             progress.value,
//             [0 , 1],
//             [0 , height.value],
//             Extrapolation.CLAMP
//         )

//         return {
//             height: heightt
//         }
//     })
    
//     return(
//         <>
//             <View style={styles.container} >
//                 <TouchableOpacity onPress={pressHandler} style={styles.top} >
//                     <Text>Open</Text>
//                 </TouchableOpacity>
//                 <Animated.View style={animatedStyles} >
//                     <Animated.View ref={contentRef} style={[styles.content]} >
//                         {children}
//                     </Animated.View>
//                 </Animated.View>
//             </View>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         overflow: "hidden",
//         backgroundColor: "dodgerblue",
//         borderRadius: 5
//     },
//     top: {
//         backgroundColor: "red",
//         padding: 16
//     },
//     content: {
//         padding: 16,
//         position: "absolute",
//         top: 0
//     }
// })

import React, { PropsWithChildren, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Animated, { useAnimatedRef, withTiming } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { useDerivedValue } from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";
import { interpolate } from "react-native-reanimated";
import { Extrapolation } from "react-native-reanimated";
import { measure } from "react-native-reanimated";
import { runOnUI } from "react-native-reanimated";

interface IAccordion {
    label: string;
}

export default function Accordion({ children, label }: PropsWithChildren<IAccordion>): React.ReactElement {
    const isOpen = useSharedValue(false);
    const contentRef = useAnimatedRef<Animated.View>();
    const isOpenProgress = useDerivedValue(() => isOpen.value ? withTiming(1) : withTiming(0));
    const height = useSharedValue(0);

    function pressHandler() {
        if(height.value === 0) {
            runOnUI(() => {
                'worklet';

                height.value = withTiming(measure(contentRef)?.height as number);
            })();
        } else {
            height.value = withTiming(0);
        }

        isOpen.value = !isOpen.value;
    }

    const animatedStyles = useAnimatedStyle(() => {
        const localHeight = interpolate(
            isOpenProgress.value,
            [0,1],
            [0, height.value],
            Extrapolation.CLAMP
        )

        return {
            height: localHeight
        }
    })

    return(
        <>
            <View style={styles.container} >
                <TouchableOpacity onPress={pressHandler} style={styles.topWrapper} >
                    <Text style={{ color: "white" }} >{label}</Text>
                </TouchableOpacity>
                <Animated.View style={[animatedStyles]} >
                    <Animated.View ref={contentRef} style={styles.contentWrapper} >
                        {children}
                    </Animated.View>
                </Animated.View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        overflow: "hidden",
        elevation: 2
    },
    topWrapper: {
        backgroundColor: "#555",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    contentWrapper: {
        padding: 16,
        backgroundColor: "white",
        position: "absolute",
        top: 0
    }
})