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
import ActivistRoom from './components/ActivistRoom';

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
      case 'activistRoom':
        console.log(" called first room");
        return <ActivistRoom store={ this.store } />
      default :
        console.log("default called");
        return <NavRoom store={ this.store }/>
   }
  }

  render () {

    return (
      <Scene>
        <a-assets>
          <img id="skyTexture" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/d4025bec-ca3b-4959-b404-94166d463dd4/"/>
          <img id="groundTexture" src="https://ucarecdn.com/c2ecbc8a-4d90-46b1-a148-d6c3594e45a3/"/>
          <img id="play-icon" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/8e78e927-180b-4934-8630-ee01a4f23d19/"/>

          <img id="ada" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <img id="grace" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b60483ac-60bb-4e55-8429-328695dfffde/"/>
          <img id="welcome" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/e47455a4-94e4-41df-a48f-385b54502fd1/"/>
          <img id="milestone" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/2716c01f-3ce1-43bb-a1a8-a2a727744274/"/>
          <img id="activist" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/674bca06-10f9-4c39-b358-8e8953da31a8/"/>
          <img id="racket" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/dbd59dfe-4419-4ce7-a10f-d12ec0319100/"/>
          <img id="rails" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/01809f99-0a91-4483-a82d-3f3f90692c2e/"/>
          <img id="gracePortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/2e428e4f-98e9-4ee3-9a04-67362b4b36c4/"/>
          <img id="joanna" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/1944984a-1faf-4cea-840b-e0eb6a5761d5/"/>

          <img id="chelseaPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/67bc265e-f5cd-4157-be63-85f43427d63e/"/>
          <audio id="chelsea-audio" crossOrigin="anonymous" src="https://ucarecdn.com/1974f904-e95d-43a8-850e-a53fdaf74d5b/"></audio>

          <img id="constanzePortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/b8d41339-9269-4284-9cab-e0de06bb9e42/"/>
          <audio id="constanze-audio" crossOrigin="anonymous" src="https://ucarecdn.com/40886a23-0bc3-4ea1-843a-99645292f3c9/"></audio>

          <img id="audreyPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/70ac4230-ca40-4c04-b097-2f9e87fb5e49/"/>
          <audio id="audrey-audio" crossOrigin="anonymous" src="https://ucarecdn.com/0e44319b-d444-45b3-b09d-27e6e07ead90/"></audio>

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
