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
  FlatList,
} from 'react-native';
import {del} from '../redux/action';

const Home = props => {
  // const [value, setValue] = useState(0);

  // function add() {
  //   setValue(value + 1);
  // }
  //
  // function minus() {
  //   setValue(value - 1);
  // }
  renderfun = (data) =>{
    return (
      <View>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{padding: 20}} onPress={() => props.delete(data.data.item.id)}>
          {data.data.item.age}
        </Text>
      </View>
    );
  };

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
      <FlatList
        data={props.history}
        renderItem={data => this.renderfun({data})}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const mapStatetoProps = state => {
  return {
    value: state.age,
    history: state.history,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    add: () => dispatch(action.add(1)),
    minus: () => dispatch(action.minus(1)),
    delete: key => dispatch(action.del(key)),
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
