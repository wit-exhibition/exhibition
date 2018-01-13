import React from 'react';
import { Entity } from 'aframe-react';

import ExhibitionBox from './ExhibitionBox';
import ExhibitionBox2 from './ExhibitionBox2';
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
        <ExhibitionBox src={ "#ada" } position={ "-2 3 -4"} sound="on: click; src: #ada-audio"/>
        <ExhibitionBox src={ "#ada" } position={ "0.5 2 -4.3"} sound="on: click; src: #ada-audio"/>
        <ExhibitionBox src={ "#ada" } position={ "3 2.3 -4.3"} sound="on: click; src: #ada-audio"/>

        <HintText rotation={{ y: 50 }} hint={"Exit"} position={{ x: -2.8, y: 1, z: -3 }} wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -3"}
          scale={"0.5 0.5 1"}
          handleClick={ this.handleClick}
          destination="navRoom"/>

        <HintText rotation={{ y: -50 }} hint={"Next room"} position={{ x: 3, y: 1, z: -3 }} wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -3"}
          scale={"0.5 0.5 1"}
          handleClick={ this.handleClick}
          destination="secondRoom"/>
      </Entity>
    )
  }

}
