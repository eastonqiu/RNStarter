/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import App from './containers';
import codePush from "react-native-code-push";

const store = createStore();

export default class Root extends Component {

  componentDidMount() {
    codePush.sync();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

