import AFRAME from 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import drawComponent from 'aframe-draw-component';
AFRAME.registerComponent("draw", drawComponent.component);

import 'aframe-htmltexture-component';

import ExhibitionBox from './components/ExhibitionBox';
import TeleportationElement from './components/TeleportationElement';
import Environment from './components/environment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', currentRoom: "navRoom"};
  }

  handleClick = (destination) => {
    setTimeout(
      () => this.setState({currentRoom: destination }), 1000
    )

  }

  //"rooms" is a way to group components, pure js
  rooms = {
    navRoom: [ <TeleportationElement
                  material={{ color: "red"}}
                  position={ "1 3 -4"}
                  handleClick={ this.handleClick}
                  destination="firstRoom"/> ],
    firstRoom: [ <ExhibitionBox src={ "#ada" } position={ "1 1 -5"} sound="on: click; src: #click-sound"/>,
                 <ExhibitionBox src={ "#ada" } position={ "-2 3 -2"}/>,
                 <TeleportationElement
                   material={{ color: "red"}}
                   position={ "1 3 -4"}
                   handleClick={ this.handleClick}
                   destination="navRoom"/>
                ]
  }

  render () {

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://ucarecdn.com/d4cf04b0-95e0-4b03-a005-f96040b1ad2f/"/>
          <img id="skyTexture" src="https://ucarecdn.com/7e11b7c7-0e1d-4720-88c9-ea40ef4f3be0/"/>
          <img id="ada" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
        </a-assets>

        { this.rooms[this.state.currentRoom] }

        <Environment />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
