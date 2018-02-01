import 'aframe';
import aframe from 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import { Scene, Entity } from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import 'aframe-htmltexture-component';

import Camera from './components/Camera';
import Environment from './components/Environment';
import NavRoom from './components/NavRoom';
import MilestoneRoom from './components/MilestoneRoom';
import ActivistRoom from './components/ActivistRoom';
import SpaceRoom from './components/SpaceRoom';
import NewWaysRoom from './components/NewWaysRoom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.audio = ""
  }

  componentDidMount() {
    if (this.props.mode === "cardboard") {
      var scene = document.querySelector('a-scene')
      var camera = document.querySelector('a-camera')
      camera.setAttribute('camera', 'userHeight', 1);
      scene.enterVR()
    }

    aframe.registerComponent('cursor-listener', {
      init: function () {
        const cursor = document.getElementById('cursor')

        this.el.addEventListener('mouseenter', function (evt) {
          cursor.setAttribute('color', '#d800f0')
        })

        this.el.addEventListener('mouseleave', function (evt) {
          cursor.setAttribute('color', 'white')
        })
      }
    })
  }

  componentWillReceiveProps(nextProps){
      this.audio = nextProps.currentAudio;

      const audioPlayer = document.getElementById('player')
      audioPlayer.setAttribute('sound', 'src', nextProps.currentAudio)
      audioPlayer.setAttribute('sound', 'autoplay', true)
  }

  renderRoom(room) {
    switch(room) {
      case 'navRoom':
        return <NavRoom />
      case 'milestoneRoom':
        console.log(" called first room");
        return <MilestoneRoom />
      case 'activistRoom':
        console.log(" called first room");
        return <ActivistRoom />
      case 'spaceRoom':
        console.log(" called first room");
        return <SpaceRoom />
      case 'newWaysRoom':
        console.log(" called first room");
        return <NewWaysRoom />
      default :
        console.log("default called");
        return <NavRoom />
   }
  }

  render () {

    return (
      <Scene>
        <a-assets>
          <img id="skyTexture" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/98a170d8-51a8-4f93-9696-11de62bd4ea9/"/>
          <img id="groundTexture" src="https://ucarecdn.com/3b01343e-b506-4dcf-8315-beee32e336da/"/>
          <img id="play-icon" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/013794b5-eee9-47d2-97bd-d5a8de4c411c/"/>
          <img id="stop-icon" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/1bfc9c74-cdb0-40f5-b640-6eb756cd1891/"/>

          <img id="activist-floor" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/ad8cdab7-b590-4e1e-8ba5-4766c98e1147/"/>
          <img id="space-floor" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/a2710603-30a6-4672-8dce-bf83b3a4483e/"/>
          <img id="milestone-floor" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/616e813e-cd5c-4332-a703-752a4b27072a/"/>
          <img id="rails-floor" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/a2290a00-23bf-484c-8235-8b2b0915f85d/"/>

          <img id="welcome" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/cfd99b54-93c6-4067-9205-de46d54f0973/"/>
          <audio id="welcome-audio" crossOrigin="anonymous" src="https://ucarecdn.com/04180e1f-3ab1-4586-bac1-8e7862368571/"></audio>

          <img id="milestone-portal" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/2716c01f-3ce1-43bb-a1a8-a2a727744274/"/>
          <img id="activist-portal" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/674bca06-10f9-4c39-b358-8e8953da31a8/"/>
          <img id="space-portal" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/dbd59dfe-4419-4ce7-a10f-d12ec0319100/"/>
          <img id="rails-portal" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/04ec2fb2-6823-4e47-b895-da7b1b3aab40/"/>

          <img id="gracePortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/7755f6d5-cd3a-47a6-a743-40ff324800d3/"/>
          <audio id="grace-audio" crossOrigin="anonymous" src="https://ucarecdn.com/c3b085cd-e327-44ee-8e84-30c3472d7216/"></audio>

          <img id="joanna" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/da57be6d-0085-4ef5-a2a4-0f078fe17256/"/>
          <audio id="joanna-audio" crossOrigin="anonymous" src="https://ucarecdn.com/2966637f-adb8-441d-81b1-43952b4a4166/"></audio>

          <img id="kamilaPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/6290cbba-815e-4f12-8049-2223fd1c23f3/"/>
          <audio id="kamila-audio" crossOrigin="anonymous" src="https://ucarecdn.com/6e679228-b979-40af-927f-90a1b2d7ccd6/"></audio>

          <img id="barbaraPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/cfefb010-551e-4e3a-ab53-63c337d26de4/"/>
          <audio id="barbara-audio" crossOrigin="anonymous" src="https://ucarecdn.com/7895f72a-1fa7-4b7d-aedc-326bff5d30d3/"></audio>

          <img id="anuradhaPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/3057fd6c-e2d4-4420-a5fd-ee8728953c79/"/>
          <audio id="anuradha-audio" crossOrigin="anonymous" src="https://ucarecdn.com/990a0c8d-a92f-4d2d-abe0-2d420738f64d/"></audio>

          <img id="dorothyPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/389af52c-b72f-4c80-8035-86788fdfb4fb/"/>
          <audio id="dorothy-audio" crossOrigin="anonymous" src="https://ucarecdn.com/526762dc-99c0-4648-8287-f4383a52e83d/"></audio>

          <img id="evelynPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/167f77a1-05f7-4764-95b3-d5bb30c2f2c4/"/>
          <audio id="evelyn-audio" crossOrigin="anonymous" src="https://ucarecdn.com/3dfffda0-dc6f-447d-a4ab-8e39b85046a8/"></audio>

          <img id="hedyPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/05969829-061a-417c-b092-107f26663678/"/>
          <audio id="hedy-audio" crossOrigin="anonymous" src="https://ucarecdn.com/07cd06cc-4c07-4cd3-b209-37ccf06482f5/"></audio>

          <img id="margaretPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/02555168-85ba-4920-9dbe-53155814cbe4/"/>
          <audio id="margaret-audio" crossOrigin="anonymous" src="https://ucarecdn.com/1dbf45fc-923f-4a81-a8e2-890c6fbf3f18/"></audio>

          <img id="chelseaPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/72030eb5-bca8-4163-a4c4-c76a3c23ca0c/"/>
          <audio id="chelsea-audio" crossOrigin="anonymous" src="https://ucarecdn.com/c39fe27e-a86a-46b0-95ca-76ea74e61c19/"></audio>

          <img id="constanzePortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/24db52f0-bdff-4d5b-8445-442d08b7ba7f/"/>
          <audio id="constanze-audio" crossOrigin="anonymous" src="https://ucarecdn.com/93f9cb97-24be-4aa9-a1e6-dc6b35e46bd6/"></audio>

          <img id="audreyPortrait" alt="" crossOrigin="anonymous" src="https://ucarecdn.com/5ce3c32a-96a8-492e-b4ac-06e979c7d48a/"/>
          <audio id="audrey-audio" crossOrigin="anonymous" src="https://ucarecdn.com/c079662b-ba18-4908-8eca-e7c72dd92d6a/"></audio>

          <audio id="click-sound" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <audio id="teleport" crossOrigin="anonymous" src="https://freesound.org/data/previews/162/162479_311243-lq.mp3"></audio>
          //TODO Mention in Readme: Sound by jobro from https://freesound.org/people/jobro/sounds/75637/
          <audio id="switch-sound" crossOrigin="anonymous" src="https://freesound.org/data/previews/75/75637_35187-lq.mp3"></audio>
        </a-assets>

        { this.renderRoom(this.props.currentRoom) }

        <Entity id="player"></Entity>

        <Environment />
        <Camera />
      </Scene>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom,
    currentAudio: state.currentAudio,
    mode: state.mode
  }
}

const connectedApp = connect( mapStateToProps )(App)

export default connectedApp;
