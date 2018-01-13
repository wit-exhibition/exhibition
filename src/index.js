import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import myReducer from './reducer';

let store = createStore(myReducer);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
    </div>
    ,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
