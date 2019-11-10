/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer';
const store = createStore(reducer);

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Home from './components/home';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainView}>
        <Home />
      </View>
    </Provider>
  );

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

export default App;
