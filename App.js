import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Expo from 'expo';
import Pamela from './pamela';

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Pamela/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
