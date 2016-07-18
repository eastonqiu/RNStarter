import React, { Component } from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  Platform,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import HelloB from './HelloB';

export default class Hello extends Component {
  static defaultProps = {
      title: 'Hello',
      navbarColor: '#F3F3F3',
  };

  render() {
    const {title, navbarColor, navigator} = this.props;

    /*const leftButtonConfig = {
      title: 'Back',
      handler() {
        navigator.pop();
      }
    };*/

    const rightButtonConfig = {
      title: 'Next',
      handler() {
        navigator.push({
          component: HelloB,
          navbarColor: navbarColor,
        });
      }
    };

    const titleConfig = {
      title: title,
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          tintColor={navbarColor} />
      </View>
    );
  }
}
