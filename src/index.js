import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = 5;
const reducer = (state = initialState, action) => {
    switch(action.type){
      case 'INC':
        return state+1;
      default:
        return state;
    }
}
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

