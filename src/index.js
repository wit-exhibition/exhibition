import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import myReducer from './reducer';
import StartScreen from './components/StartScreen';

let store = createStore(myReducer);

function modeDecision() {
   if (store.getState().mode === "start") {
     return <StartScreen store={store}/>
   } else {
     return <App store={store}/>
   }
}

function render() {
  ReactDOM.render(
    <div className="container" style={{position: "absolute", height: "100%", width: "100%"}}>
      { modeDecision() }
    </div>
    ,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
