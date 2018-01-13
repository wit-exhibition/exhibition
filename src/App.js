import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import { Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'aframe-htmltexture-component';

import Camera from './components/Camera';
import Environment from './components/Environment';
import NavRoom from './components/NavRoom';
import FirstRoom from './components/FirstRoom';
import SecondRoom from './components/SecondRoom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderRoom(room) {
    switch(room) {
      case 'navRoom':
        return <NavRoom store={ this.store } />
      case 'firstRoom':
        console.log(" called first room");
        return <FirstRoom store={ this.store } />
      case 'secondRoom':
        console.log(" called first room");
        return <SecondRoom store={ this.store } />
      default :
        console.log("default called");
        return <NavRoom store={ this.store }/>
   }
  }

  render () {

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b2ac6e1e-b44b-48ab-adfc-a3d595e07d1b/"/>
          <img id="skyTexture" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/23d47526-e465-49a9-8477-91b8036f42e3/"/>
          <img id="ada" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <img id="grace" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b60483ac-60bb-4e55-8429-328695dfffde/"/>
          <img id="welcome" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/e47455a4-94e4-41df-a48f-385b54502fd1/"/>
          <img id="activistinPanel" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/4534d558-d96b-4c21-ab67-a9ce36713b81/"/>
        <audio id="click-sound" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <audio id="ada-audio" crossOrigin="anonymous" src="https://ucarecdn.com/59427ee4-49d5-4983-b79b-410ec846f5f9/"></audio>
        </a-assets>

        { this.renderRoom(this.props.store.getState().currentRoom) }

        <Environment />
        <Camera />
      </Scene>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom
  }
}

const connectedApp = connect( mapStateToProps )(App)

export default connectedApp;
