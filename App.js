/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Form from "./src/Form";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {

    let items =  [
        {
            type: "input",
            key: "username",
            title: "用户名",
            icon: 'userName',
            placeholder: '请输入用户名'
        },
        {
            type: "input",
            key: "password",
            title: "密码",
            icon: 'password',
            placeholder: '请输入密码'
        },
    ];

    return (
      <View style={styles.container}>
        <Form ref={(c) => {this.form = c;}} items={items}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
