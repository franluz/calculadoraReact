import React from 'react'
import { View } from 'react-native'
import { SafeAreaView, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
        return (<View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1} >
                {props.values}
                </Text>
                </View>)
}
const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    displayValue: {
        fontSize: 60,
        color:'#fff',
    }
})