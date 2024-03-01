import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils/dimensions";

export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    topWrapper: {
        padding: 16,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    bottomWrapper: {
        padding: 16,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    slidesContainer: {
        
    },
    slide: {
        flexDirection: "column",
        width: SCREEN_WIDTH,
        alignItems: "center",
        padding: 32
    },
    heading: {
        marginVertical: 16,
        fontSize: 24,
        fontWeight: "700",
        color: "black"
    },
    description: {
        textAlign:"center",
        fontSize: 16,
        lineHeight: 24
    },
    dotContainer: {
        flexDirection: "row",
        gap: 6,
    },
    dot: {
        backgroundColor: "black",
        width: 10,
        height: 10,
        borderRadius: 50
    }
})