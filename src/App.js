import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB_xfAQPLruihcPO3s5EvB3fKDbbWFI89A',
      authDomain: 'employee-manager-377dc.firebaseapp.com',
      databaseURL: 'https://employee-manager-377dc.firebaseio.com',
      projectId: 'employee-manager-377dc',
      storageBucket: 'employee-manager-377dc.appspot.com',
      messagingSenderId: '722245297980'
    });
  }

  render() {
    return (
        <Provider store={createStore(reducers)}>
          <LoginForm/>
        </Provider>
    );
  }
}

export default App;