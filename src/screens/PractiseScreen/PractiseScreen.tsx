import React, { useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import { Accordion, Modal, Switch } from "../../components";
import { TapGestureHandler } from "react-native-gesture-handler";

export default function PractiseScreen() {
    const doubleTapRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <View style={{ padding: 16, backgroundColor: "#f4f4f4", flex: 1, gap: 16 }} >
                {/* <Accordion label="practise" >
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro neque fugit dicta eos voluptate placeat rerum molestias mollitia explicabo est.
                    </Text>
                </Accordion>
                <Accordion label="practise" >
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque provident pariatur minima corporis nam magnam saepe fugiat architecto! Sed aperiam repellat consequatur porro corrupti iste labore nihil odit delectus maiores quidem autem similique fugiat, ipsam incidunt blanditiis, hic perspiciatis? Amet molestias, illo soluta cupiditate ipsam delectus repellendus recusandae beatae qui.
                    </Text>
                </Accordion>
                <Accordion label="practise" >
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, libero!
                    </Text>
                </Accordion>
                <TapGestureHandler
                    waitFor={doubleTapRef}
                    onActivated={() => { console.log("SINGLE TAP") }}
                >
                    <TapGestureHandler
                        ref={doubleTapRef}
                        numberOfTaps={2}
                        onActivated={() => { console.log("DOUBLE TAP") }}
                    >
                        <View style={{ backgroundColor: "#555", padding: 16, flex: 1 }} />
                    </TapGestureHandler>
                </TapGestureHandler>
                <Switch /> */}
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} >

                </Modal>
                <Button title="open" onPress={() => { setIsOpen(true) }} />
            </View>
        </>
    )
}