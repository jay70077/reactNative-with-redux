/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as action from '../redux/action';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Home = (props) => {
 // const [value, setValue] = useState(0);

  // function add() {
  //   setValue(value + 1);
  // }
  //
  // function minus() {
  //   setValue(value - 1);
  // }

  return (
    <View style={styles.mainView}>
      <Text>hello word</Text>
      <Text style={{fontSize: 20}}>{props.value}</Text>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <TouchableOpacity style={styles.background} onPress={props.add}>
          <Text>add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.background} onPress={props.minus}>
          <Text>minus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStatetoProps = state => {
  return {
    value: state.age,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    add: () => dispatch(action.add(1)),
    minus: () => dispatch(action.minus(1)),
  };
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'green',
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft: 10,
  },
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(Home);
