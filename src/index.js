import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import myReducer from './reducer';
import './styles.css';
import StartScreen from './components/StartScreen';

let store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function modeDecision() {
   if (store.getState().mode === "start") {
     return <StartScreen store={store}/>
   } else {
     return (
       <Provider store={store}>
         <App />
       </Provider>
     )
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
