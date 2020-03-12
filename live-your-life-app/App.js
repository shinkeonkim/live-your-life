import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {render} from 'react-dom';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingPage from '../view/LoadingPage';
import MainPage from '../view/MainPage';

class App extends Component {
  state = {
    isLoaded : false
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <View style = {styles.container}>
        {isLoaded ? (<MainPage style = {styles.page}/>): (<LoadingPage style = {styles.page}/>)}
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

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
});

export default createAppContainer(AppNavigator);