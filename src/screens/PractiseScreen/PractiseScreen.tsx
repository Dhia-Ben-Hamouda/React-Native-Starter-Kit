import React from "react";
import { Text, View } from "react-native";
import { Accordion } from "../../components";

export default function PractiseScreen() {
    return (
        <>
            <View style={{ padding: 16, backgroundColor: "#f4f4f4", flex: 1, gap: 16 }} >
                <Accordion label="practise" >
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
            </View>
        </>
    )
}