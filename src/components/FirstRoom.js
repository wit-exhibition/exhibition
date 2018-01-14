import React from 'react';
import { Entity } from 'aframe-react';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';


export default class FirstRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    console.log("first room rendered");
    return (
      <Entity>
        <LightSwitch
          position={"0 0.974 -2.110"}
          scale={"0.3 0.3 0.3"}/>
        <ExhibitionBox
          src={ "#gracePortrait" }
          position={ "0 2.1 -2.3"}
          rotation={"0 0 0"}
          scale={"1.3 1.65 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />

        <ExhibitionBox
          src={ "#welcome" }
          position={ "-2 2.1 -2"}
          rotation={"0 50 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />

        <ExhibitionBox
          src={ "#joanna" }
          position={ "2 2.1 -2"}
          rotation={"0 -50 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -3 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -3"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -3 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -3"}
          scale={"0.5 0.5 1"}
          destination="secondRoom"
          store={ this.store }/>
      </Entity>
    )
  }

}
