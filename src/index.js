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
    navRoom: [ <ExhibitionBox src={ "#ada" } position={ "-1.5 3 -4"} sound="on: click; src: #click-sound"/>,
               <TeleportationElement
                  material={{ color: "white"}}
                  position={"1.5 2 -4"}
                  scale={"0.5 4 0.5"}
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
          <img id="groundTexture" src="https://ucarecdn.com/b2ac6e1e-b44b-48ab-adfc-a3d595e07d1b/"/>
          <img id="skyTexture" src="https://ucarecdn.com/23d47526-e465-49a9-8477-91b8036f42e3/"/>
          <img id="ada" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
        </a-assets>

        { this.rooms[this.state.currentRoom] }

        <Environment />

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            geometry={{ primitive: 'ring' }}
            material={{ color: 'white', shader: 'flat' }}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
