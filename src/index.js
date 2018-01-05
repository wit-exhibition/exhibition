import AFRAME from 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import drawComponent from 'aframe-draw-component';
AFRAME.registerComponent("draw", drawComponent.component);

import 'aframe-htmltexture-component';

import ExhibitionBox from './components/ExhibitionBox';
import Camera from './components/Camera';
import TeleportationElement from './components/TeleportationElement';
import Environment from './components/Environment';
import UpDownAnimation from './components/UpDownAnimation';
import HintText from './components/HintText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', currentRoom: "navRoom"};
  }

  handleClick = (destination) => {
    var audio = new Audio('https://freesound.org/data/previews/162/162479_311243-lq.mp3');
    audio.play();
    setTimeout(
      () => {
        this.setState({currentRoom: destination })
      }, 1000
    )
  }

  //"rooms" is a way to group components, pure js
  rooms = {
    navRoom: [
      <HintText rotation={{ y: 0 }} hint={"Click on Ada"} position={{ x: 0.1, y: 3.2, z: -2.5 }} wrapCount={10}/>,
      <ExhibitionBox
        src={ "#welcome" }
        position={ "-1 2.5 -2.5"}
        scale={"1.3 1.3 0"}
        shader={"flat"}
        transparent={"true"}
        sound="on: click; src: #ada-audio"
      />,
    <HintText rotation={{ y: -20 }} hint={"Click this white box"} position={{ x: 2.4, y: 3.78, z: -4.12 }} wrapCount={8}/>,
      <TeleportationElement
        material={{ color: "white"}}
        position={"1.5 2 -4"}
        scale={"0.5 4 0.5"}
        handleClick={ this.handleClick}
        destination="firstRoom"
        />],
    firstRoom: [
      <ExhibitionBox src={ "#ada" } position={ "-2 3 -4"} sound="on: click; src: #ada-audio"/>,
      <ExhibitionBox src={ "#ada" } position={ "0.5 2 -4.3"} sound="on: click; src: #ada-audio"/>,
      <ExhibitionBox src={ "#ada" } position={ "3 2.3 -4.3"} sound="on: click; src: #ada-audio"/>,

      <HintText rotation={{ y: 50 }} hint={"Exit"} position={{ x: -2.8, y: 1, z: -3 }} wrapCount={8}/>,
      <TeleportationElement
        material={{ color: "#01ff26"}}
        position={ "-3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="navRoom"/>,

      <HintText rotation={{ y: -50 }} hint={"Next room"} position={{ x: 3, y: 1, z: -3 }} wrapCount={8}/>,
      <TeleportationElement
        material={{ color: "#d800f0"}}
        position={ "3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="secondRoom"/>
    ],
    secondRoom: [
      <ExhibitionBox src={ "#grace" } position={ "-2 2.2 -4"} />,
      <ExhibitionBox src={ "#grace" } position={ "0.5 3 -4.3"} />,
      <ExhibitionBox src={ "#grace" } position={ "3 2 -4.3"} />,

      <HintText rotation={{ y: 50 }} hint={"Exit"} position={{ x: -2.8, y: 1, z: -3 }} wrapCount={8}/>,
      <TeleportationElement
        material={{ color: "#01ff26"}}
        position={ "-3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="navRoom"/>,

      <HintText rotation={{ y: -50 }} hint={"Next room"} position={{ x: 3, y: 1, z: -3 }} wrapCount={8}/>,
      <TeleportationElement
        material={{ color: "#d800f0"}}
        position={ "3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="firstRoom"/>
    ]
  }

  render () {

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://ucarecdn.com/b2ac6e1e-b44b-48ab-adfc-a3d595e07d1b/"/>
          <img id="skyTexture" src="https://ucarecdn.com/23d47526-e465-49a9-8477-91b8036f42e3/"/>
          <img id="ada" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <img id="grace" src="https://ucarecdn.com/b60483ac-60bb-4e55-8429-328695dfffde/"/>
          <img id="welcome" src="https://ucarecdn.com/e47455a4-94e4-41df-a48f-385b54502fd1/"/>
          <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <audio id="ada-audio" crossorigin="anonymous" src="https://ucarecdn.com/59427ee4-49d5-4983-b79b-410ec846f5f9/"></audio>
        </a-assets>

        <a-sound src="src: url(http://freesound.org/data/previews/144/144549_2580695-lq.mp3)" autoplay="true" loop="true" position="0 2 5"></a-sound>

        { this.rooms[this.state.currentRoom] }

        <Environment />
        <Camera />
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
