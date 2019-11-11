/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Button from "./src/components/Button";
import Display from "./src/components/Display";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: { fontFamily: "Arial, sans-serif", flexDirection: "row", flexWrap: "wrap" },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueDisplay: ""
    };
    const colorButton = "orange";
    const backgroundButton = "rgba(0, 0, 0, .09)";
    this.typingValue = this.typingValue.bind(this);
    this.deleteLastValueTyped = this.deleteLastValueTyped.bind(this);
    this.cleanValueDisplay = this.cleanValueDisplay.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.transformNegative = this.transformNegative.bind(this);
  }

  typingValue(typedValue) {
    const value = this.state.valueDisplay + typedValue;
    this.setState({ valueDisplay: value });
  }

  deleteLastValueTyped() {
    let value = this.state.valueDisplay;
    const isEmpty = value.length == 0;

    if (isEmpty) {
      return;
    }

    const lastPositionValueTyped = value.length;
    const penultimePositionValueTyped = lastPositionValueTyped - 1;
    value = value.substring(0, penultimePositionValueTyped);
    this.setState({ valueDisplay: value.trim() });
  }

  cleanValueDisplay() {
    this.setState({ valueDisplay: "" });
  }

  calculateResult() {
    try {
      const result = eval(this.state.valueDisplay);
      this.setState({ valueDisplay: result.toString() });
    } catch (e) { }
  }

  transformNegative() {
    const sinal = "-";
    const isFirstCharacterSinalNegative = this.state.valueDisplay[0] == sinal;
    if (isFirstCharacterSinalNegative) {
      let value = this.state.valueDisplay;
      const lastPositionValueDisplay = value.length;
      value = value.substring(1, lastPositionValueDisplay);
      this.setState({ valueDisplay: value.trim() });
      return;
    }

    const value = sinal + " " + this.state.valueDisplay;
    this.setState({ valueDisplay: value });
  }

  render() {

    return (
      <View style={styles.container} >
        <Display valueDisplay={this.state.valueDisplay} />
        <Button label="C" onClick={this.cleanValueDisplay} />
        <Button label="+/-" onClick={this.transformNegative} />
        <Button label="%" onClick={() => this.typingValue("%")} />
        <Button label="DEL" onClick={this.deleteLastValueTyped} />
        <Button label="7" onClick={() => this.typingValue("7")} />
        <Button label="8" onClick={() => this.typingValue("8")} />
        <Button label="9" onClick={() => this.typingValue("9")} />
        <Button label="/"
          onClick={() => this.typingValue("/")}
          color={this.colorButton} backgroundColor={this.backgroundButton} />
        <Button label="4" onClick={() => this.typingValue("4")} />
        <Button label="5" onClick={() => this.typingValue("5")} />
        <Button label="6" onClick={() => this.typingValue("6")} />
        <Button label="*"
          onClick={() => this.typingValue("*")}
          color={this.colorButton} backgroundColor={this.backgroundButton} />
        <Button label="1" onClick={() => this.typingValue("1")} />
        <Button label="2" onClick={() => this.typingValue("2")} />
        <Button label="3" onClick={() => this.typingValue("3")} />
        <Button label="-" onClick={() => this.typingValue("-")}
          color={this.colorButton} backgroundColor={this.backgroundButton} />
        <Button label="0" onClick={() => this.typingValue("0")} />
        <Button label="." onClick={() => this.typingValue(".")} />
        <Button label="=" onClick={this.calculateResult} color="white" backgroundColor="orange" />
        <Button label="+"
          onClick={() => this.typingValue("+")}
          color={this.colorButton} backgroundColor={this.backgroundButton} />
      </View>
    );
  };
};

export default App;
