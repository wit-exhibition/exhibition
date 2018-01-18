import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import { Scene } from 'aframe-react';
import React from 'react';
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

  componentDidMount() {
    if (this.store.getState().mode === "carboard") {
      var scene = document.querySelector('a-scene')
      var camera = document.querySelector('a-camera')
      camera.setAttribute('camera', 'userHeight', 1);
      scene.enterVR()
    }
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
          <img id="skyTexture" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/99bb7a07-6a39-4253-8c25-6c4b6de1dde3/"/>
          <img id="groundTexture" src="https://ucarecdn.com/c2ecbc8a-4d90-46b1-a148-d6c3594e45a3/"/>
          <img id="ada" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <img id="grace" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b60483ac-60bb-4e55-8429-328695dfffde/"/>
          <img id="welcome" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/e47455a4-94e4-41df-a48f-385b54502fd1/"/>
          <img id="firstRoomSign" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/7793af23-232d-4fe0-adf6-6508c099138a/"/>
          <img id="secondRoomSign" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/7ad18b89-5920-4b06-b4e8-cd226a0967d4/"/>
          <img id="gracePortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/2e428e4f-98e9-4ee3-9a04-67362b4b36c4/"/>
          <img id="joanna" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/1944984a-1faf-4cea-840b-e0eb6a5761d5/"/>
          <audio id="welcome-audio" crossOrigin="anonymous" src="https://ucarecdn.com/cc9bcebd-2586-4cf3-978c-235a92b2cc8c/"></audio>
          <audio id="click-sound" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <audio id="ada-audio" crossOrigin="anonymous" src="https://ucarecdn.com/59427ee4-49d5-4983-b79b-410ec846f5f9/"></audio>
          <audio id="grace-audio" crossOrigin="anonymous" src="https://ucarecdn.com/e8a6d5dd-4241-44ce-8770-426bb8b36911/"></audio>
      </a-assets>

        { this.renderRoom(this.props.currentRoom) }

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