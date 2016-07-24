'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator = React.createClass({
  mixins: [TimerMixin],

  setToggleTimeout() {
    this.setTimeout(() => {
      this.setToggleTimeout();
      this.props.onLoaded();
    }, 1);
  },

  componentDidMount() {
    this.setToggleTimeout();
  },

  render() {
    return (
      <ActivityIndicator
        animating={true}
        style={styles.centering}
        size="large"
      />
    );
  }
});


export default class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  loaded() {
    this.setState({loading: false});
  }

  render() {
    if(this.state.loading)
      return <ToggleAnimatingActivityIndicator onLoaded={this.loaded.bind(this)} />;
    else if(this.props.component)
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
