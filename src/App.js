import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import { Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe-htmltexture-component';

import ExhibitionBox from './components/ExhibitionBox';
import ExhibitionBox2 from './components/ExhibitionBox2';

import Camera from './components/Camera';
import TeleportationElement from './components/TeleportationElement';
import Environment from './components/Environment';
import HintText from './components/HintText';
import NavRoom from './components/NavRoom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', currentRoom: "navRoom"};
    this.store = this.props.store;
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
      ],
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

  renderRoom(room) {
    switch(room) {
      case 'navRoom':
        return <NavRoom store={ this.store } />
      case 'firstRoom':
        console.log("first room");
        return <NavRoom store={ this.store } />
      default :
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

//ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
export default App;
