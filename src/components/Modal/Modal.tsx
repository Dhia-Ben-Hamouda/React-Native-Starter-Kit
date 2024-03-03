import React, { PropsWithChildren, SetStateAction, useCallback } from "react";
import { Modal as NativeModal, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";

interface IModal {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ isOpen, setIsOpen, children }: PropsWithChildren<IModal>): React.ReactElement {
    
    const closeModal = useCallback(() => {
        setIsOpen(false);
    } , []);

    return(
        <>
            <NativeModal animationType="fade" transparent visible={isOpen} >
                <TouchableWithoutFeedback onPress={closeModal} >
                    <View style={styles.container} >
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </NativeModal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)"
    }
})