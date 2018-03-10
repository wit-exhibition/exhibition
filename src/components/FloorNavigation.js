import React from 'react';
import { Entity } from 'aframe-react';

import FloorIndicator from './FloorIndicator';
import FloorTeleportation from './FloorTeleportation';

export default class FloorNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.roomIndicator = this.props.roomIndicator
    this.leftIndicator = this.props.leftIndicator
    this.leftDestination = this.props.leftDestination
    this.rightIndicator = this.props.rightIndicator
    this.rightDestination = this.props.rightDestination
  }

  render() {
    return (
      <Entity>
        <FloorIndicator src={ this.roomIndicator }/>

        <FloorTeleportation src={ this.leftIndicator }
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5"}
          teleportSound={true}
          destination={ this.leftDestination }
          cursor-listener />

        <FloorTeleportation src={ this.rightIndicator }
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={ this.rightDestination }
          cursor-listener />
      </Entity>
    )
  }
}
