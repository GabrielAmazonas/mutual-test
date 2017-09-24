import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class TouchableCircle extends Component {
   
    state = {
        count: 0
    }

    sumOne = () => {
        this.props.decreaseOther();
      }
  
    render() {
        return (

            <TouchableOpacity onPress={this.sumOne} style={this.props.style}>
                <View style={styles.circleChild}>
                    <Text>{this.props.count}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    circleChild: {
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


