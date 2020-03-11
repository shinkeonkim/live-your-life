import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {render} from 'react-dom';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';

export default class App extends Component {
  state = {
    isLoaded : false
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <View style = {styles.container}>
        {isLoaded ? (<MainPage style = {styles.page}/>) : (<LoadingPage style = {styles.page}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
  },
  page: {
    flex: 1,
    width:'100%',
  },
});
