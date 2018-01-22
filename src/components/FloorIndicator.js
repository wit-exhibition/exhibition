import React from 'react';
import { Entity } from 'aframe-react';

export default class FloorIndicator extends React.Component {

  render() {
    return (
      <Entity
        primitive={ "a-box" }
        shader={ "flat" }
        transparent={ "true" }
        position={"0 0.1 -1.5"}
        scale={"1.5 1.5 0"}
        rotation={"-90 0 0"}
        {...this.props}
        />
    )
  }
}
