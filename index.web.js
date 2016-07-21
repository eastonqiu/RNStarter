/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
} from 'react-native';
import Root from './src/index.web';

AppRegistry.registerComponent('RNStarter', () => Root);
var app = document.createElement('div');
document.body.appendChild(app);
AppRegistry.runApplication('RNStarter', {
  rootTag: app
});