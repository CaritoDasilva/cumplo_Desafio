import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';

//Redux
import { Provider } from 'react-redux';
import store from './components/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
