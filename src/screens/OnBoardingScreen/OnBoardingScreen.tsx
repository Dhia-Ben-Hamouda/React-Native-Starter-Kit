import React, { useCallback, useRef, useState } from "react";
import { FlatList, Text, View, ViewToken } from "react-native";
import FirstSlide from "../../assets/images/FirstSlide.svg";
import SecondSlide from "../../assets/images/SecondSlide.svg";
import ThirdSlide from "../../assets/images/ThirdSlide.svg";
import { styles } from "./extra/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Dot from "./components/Dot";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackScreens } from "../../types";

const slides = [
    {
        picture: <FirstSlide />,
        heading: "Choose Products",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
        picture: <SecondSlide />,
        heading: "Make Payment",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
        picture: <ThirdSlide />,
        heading: "Get Your Order",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
]

interface IOnViewableItemsChanged {
    viewableItems: ViewToken[]
}

export default function OnBoardingScreen(): React.ReactElement {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const navigation = useNavigation<NavigationProp<AuthStackScreens>>();
    const flatListRef = useRef<FlatList>(null);
    const offset = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            offset.value = event.contentOffset.x;
        }
    })

    const onViewableItemsChanged = useCallback(({ viewableItems }: IOnViewableItemsChanged) => {
        setCurrentSlideIndex(viewableItems[0].index ?? 0);
    }, []);

    const slideHandler = useCallback((action: "prev" | "next") => {
        if(action === "next") {
            if(currentSlideIndex === 2) {
                console.log("get started");
                navigation.navigate("PractiseScreen");
            } else {    
                flatListRef.current?.scrollToIndex({ index: currentSlideIndex + 1 });
            }
        } else {
            flatListRef.current?.scrollToIndex({ index: currentSlideIndex - 1 });
        }
    } , [currentSlideIndex]);

    return (
        <>
            <View style={styles.container} >
                <View style={styles.topWrapper} >
                    <Text style={{ fontSize: 16 }} >{currentSlideIndex + 1}/3</Text>
                    <TouchableOpacity onPress={() => { flatListRef.current?.scrollToEnd(); }} >
                        <Text style={{ fontSize: 16 }} >Skip</Text>
                    </TouchableOpacity>
                </View>

                <Animated.FlatList
                    ref={flatListRef}
                    onViewableItemsChanged={onViewableItemsChanged}
                    onScroll={onScroll}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.slidesContainer}
                    pagingEnabled
                    horizontal
                    data={slides}
                    renderItem={({ item, index }) => (
                        <View style={styles.slide} key={index} >
                            {item.picture}
                            <Text style={styles.heading} >{item.heading}</Text>
                            <Text style={styles.description} >{item.description}</Text>
                        </View>
                    )}
                />

                <View style={styles.bottomWrapper} >
                    <TouchableOpacity onPress={() => { slideHandler("prev") }}  >
                        <Text style={{ fontSize: 16, opacity: currentSlideIndex === 0 ? 0 : 1 }} >Prev</Text>
                    </TouchableOpacity>

                    <View style={styles.dotContainer} >
                        {slides.map((slide, index) => (
                            <Dot key={index} offset={offset} index={index} />
                        ))}
                    </View>

                    <TouchableOpacity onPress={() => { slideHandler("next") }}  >
                        <Text style={{ fontSize: 16 }} >{ currentSlideIndex === 2 ? "Get Started" : "Next" }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}