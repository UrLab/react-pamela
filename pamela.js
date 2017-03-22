import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Expo from 'expo';

function getSpaceApi() {
  return fetch('http://urlab.space/')
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}


class User extends React.Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

export default class Pamela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};

    this.refresh = this.refresh.bind(this);
    this.refresh();
    setInterval(this.refresh, 20 * 1000);
  }

  refresh() {
    promise = getSpaceApi();
    promise.then((data) => {
      u = data.sensors.people_now_present[0].names;
      console.log("Update users");
      this.setState({users: u});
    });
  }

  render() {
    return (
      <View>
        {this.state.users.map((user) => {
          return <User name={user} key={user}/>;
        })}
      </View>
    );
  }
}
