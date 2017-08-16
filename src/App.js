import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    );
  }
}

export default App;