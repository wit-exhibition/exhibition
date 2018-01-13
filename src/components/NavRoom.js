import React from 'react';
import { Entity } from 'aframe-react';

import ExhibitionBox from './ExhibitionBox';
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
          position={{ x: -1, y: 2.5, z: -1.5 }}
          wrapCount={16}/>

        <ExhibitionBox
          src={ "#welcome" }
          position={ "0 2.1 -1.4"}
          rotation={"0 0 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />

        <HintText
          rotation={{ y: -20 }}
          hint={"Click this white box"}
          position={{ x: 2.4, y: 2.5, z: -1.5 }}
          wrapCount={14}/>

        <TeleportationElement
          src={ "#activistinPanel" }
          material={{ color: "white"}}
          position={"1.205 1.753 -1.154"}
          scale={"1.200 0.400 0.200"}
          rotation={"0 -30 0"}
          handleClick={ this.handleClick}
          destination="firstRoom"
          store={ this.store }
          />
      </Entity>
    )
  }

}
