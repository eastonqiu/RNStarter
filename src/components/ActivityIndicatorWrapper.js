'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorIOS,
  StyleSheet,
  Platform,
} from 'react-native';

export default class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(this.loaded.bind(this), 1);
  }

  loaded() {
    this.setState({loading: false});
  }

  render() {
    if(this.state.loading) {
      if(Platform.OS == 'web')
         return (
            <ActivityIndicatorIOS
              animating={true}
              style={styles.centering}
              size="large"
            />
          );
      else
         return (
            <ActivityIndicator
              animating={true}
              style={styles.centering}
              size="large"
            />
          );
    } else if(this.props.component)
      return <this.props.component {...this.props} />;
    else
      return null;
  }
}

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

