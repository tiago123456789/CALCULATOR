import React from "react";
import { StyleSheet, TouchableHighlight, Text, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    button: {
        borderWidth: .5,
        borderColor: "rgba(0, 0, 0, .4)",
        width: width / 4,
        height: width / 4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: { color: "black", fontSize: 30 }
});

export default (props) => (
    <TouchableHighlight onPress={props.onClick}
    style={{ ...styles.button, backgroundColor: props.backgroundColor }} >
        <Text style={{ ...styles.buttonText, color: props.color }}>{props.label}</Text>
    </TouchableHighlight>
)