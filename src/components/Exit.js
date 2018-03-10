import React from 'react';
import { Entity } from 'aframe-react';

import HintText from './HintText';
import TeleportationElement from './TeleportationElement';

export default class Exit extends React.Component {
  render() {
    return (
      <Entity>
        <HintText
          rotation={{ y: 100 }}
          hint={"Exit zum Navigationsraum"}
          position={{ x: -2.8, y: 1, z: 0.5}}
          wrapCount={16}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 0.5"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          teleportSound={true}
          cursor-listener />
      </Entity>
    )
  }
}
