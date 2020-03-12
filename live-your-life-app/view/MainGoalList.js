import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {render} from 'react-dom';

export default class MainGoalList extends Component {
    
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.upper}>
                    <Text style = {styles.title}>
                        오늘은 당신을 위한 삶을 살았나요?
                    </Text>
                </View>

                <FlatList
                    data = {[{key: 'asd'},{key : 'asd2'},{key : 'asd3'},{key : 'asd4'},{key : 'asd5'},{key : 'asd6'}]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    style = {styles.goallist}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        width: "100%",
    },
    upper: {
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
    },
    lower: {
        flex :1,
        width: "100%",
    },
    goallist: {
        flex:1,
        width: "100%",
    },
    item: {
        flex:1,
        fontSize: 20,
        height: 200,
        width: "100%",
        textAlign: "center",
    }
})