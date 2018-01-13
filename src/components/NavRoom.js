import React from 'react';
import { Entity } from 'aframe-react';

import ExhibitionBox from './ExhibitionBox';
import ExhibitionBox2 from './ExhibitionBox2';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';


export default class NavRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <Entity>
        <HintText
          rotation={{ y: 0 }}
          hint={"Click on Ada"}
          position={{ x: 0.1, y: 3.2, z: -2.5 }}
          wrapCount={10}/>

        <ExhibitionBox
          src={ "#welcome" }
          position={ "-1 2.5 -1.8"}
          rotation={"0 10 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />

        <HintText
          rotation={{ y: -20 }}
          hint={"Click this white box"}
          position={{ x: 2.4, y: 3.78, z: -4.12 }}
          wrapCount={8}/>

        <TeleportationElement
          material={{ color: "white"}}
          position={"1.5 2 -4"}
          scale={"0.5 4 0.5"}
          handleClick={ this.handleClick}
          destination="firstRoom"
          store={ this.store }
          />
      </Entity>
    )
  }

}
