import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {render} from 'react-dom';
import {LinearGradient} from 'expo-linear-gradient';

export default class LoadingPage extends Component {
    render() {
        return (
            <View style = {loadingStyles.container}>
                <LinearGradient 
                colors = {["#97C6E8","#B9A6FF","#ffffff"]} 
                style = {loadingStyles.container}>
                    <View style = {loadingStyles.container}>
                        <View style = {loadingStyles.upper}>
                            <Text style = {loadingStyles.title}>
                                Live Your Life
                            </Text>
                        </View>
                        <View style = {loadingStyles.lower}>
                            <Text style = {loadingStyles.content}>
                                당신은 원하는 것을 할 자유가 있어요!
                            </Text>
                            <ActivityIndicator style = {loadingStyles.indicator} color = "#B2CBFF" size = "large"/>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const loadingStyles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        alignItems:"center",
        justifyContent:"center",
    },
    upper: {
        flex: 4,
        justifyContent:"center",
    },
    title: {
        flex:1,
        marginTop: 150,
        alignSelf: "center",
        fontSize: 40,
        color: "#ffffff",
    },
    lower: {
        flex:1,
    },
    indicator: {
        flex:1,
    },
    
    content: {
        flex:1,
        alignSelf: "center",
        fontSize: 20,
        color: "#44425E",
    }
})