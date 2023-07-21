import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Botton from './src/components/Botton';
import Display from './src/components/Display';
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}
export default class App extends Component {
  state = { ...initialState }
  addDigit = n => {
    let clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay
    if (n === '.' && !clearDisplay
      && this.state.displayValue.includes('.')) {
      return
    }
    let currentValue = clearDisplay ? '' : this.state.displayValue
    let displayValue = currentValue + n
    // console.warn(`currentValue ${currentValue} `)
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }
  
  clearMemory = () => {
    this.setState({ ...initialState })
  }
  setOperation = operation => {
    if (this.state.current === 0) {
      console.warn(` Valor do primeiro numero ${this.state.values[this.state.current]}`)
   
      this.setState({ operation, current: 1, clearDisplay: true })
    }
    else {
      const equals = operation === '='
      console.warn(` Valor do Segundo numero ${this.state.values[this.state.current]}`)

      const values = [...this.state.values]
      try {
        console.warn(`${values[0]}`)
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        clearDisplay: true,
        values,
      })
    }
  }

  render() {
    return <View style={styles.sectionContainer}>
      <Display values={this.state.displayValue} />
      <View style={styles.button}>
        <Botton label='AC' triple onClick={this.clearMemory} />
        <Botton label='/' operation onClick={this.setOperation} />
        <Botton label='7' onClick={this.addDigit} />
        <Botton label='8' onClick={this.addDigit} />
        <Botton label='9' onClick={this.addDigit} />
        <Botton label='*' operation onClick={this.setOperation} />
        <Botton label='4' onClick={this.addDigit} />
        <Botton label='5' onClick={this.addDigit} />
        <Botton label='6' onClick={this.addDigit} />
        <Botton label='-' operation onClick={this.setOperation} />
        <Botton label='1' onClick={this.addDigit} />
        <Botton label='2' onClick={this.addDigit} />
        <Botton label='3' onClick={this.addDigit} />
        <Botton label='+' operation onClick={this.setOperation} />
        <Botton label='0' double onClick={this.addDigit} />
        <Botton label='.' onClick={this.addDigit} />
        <Botton label='=' operation onClick={this.setOperation} />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});