import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {render} from 'react-dom';

export default class MainPage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Live Your Life
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
    },
})