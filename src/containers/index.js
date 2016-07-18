import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  Platform,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { original, community, dribbble, cnodejs } from '../route';

import TabBar from '../components/TabBar';

export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
    };
  }

  _renderTabBarItem (title, icon, badge, view) {
    return (
      <TabBar.Item
          icon={icon}
          selectedIcon={icon}
          onPress={() => {
              // do sth
          }}
          badge={badge}
          title={title}>
          <Navigator
            initialRoute={{title: title, component: view, navbarColor: "#F3F3F3"}}
            configureScene={() => {
              return Navigator.SceneConfigs.FadeAndroid
            }}
            renderScene={(route, navigator) => {
              if (route.component) {
                return (
                  <route.component {...route} navigator={navigator} />
                )
              }
            }} />
      </TabBar.Item>
    );
  }

  render() {
    return (
      <TabBar
        onItemSelected={(index) => {}}
        navTextColorSelected="#0066FF"
      >
        {this._renderTabBarItem(original.title, original.icon, 0, original.component)}
        {this._renderTabBarItem(community.title, community.icon, 1, community.component)}
        {this._renderTabBarItem(dribbble.title, dribbble.icon, 2, dribbble.component)}
        {this._renderTabBarItem(cnodejs.title, cnodejs.icon, 3, cnodejs.component)}
      </TabBar>
    )
  }
}
