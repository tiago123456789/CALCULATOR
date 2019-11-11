import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    display: {
        width,
        height: 170,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 15
    },
    displayText: { fontSize: 30, fontWeight: "bold" }
});

export default (props) => (
    <View style={styles.display}>
        <Text style={styles.displayText}>{props.valueDisplay}</Text>
    </View>
);