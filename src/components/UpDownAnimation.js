import React from 'react';
import { Entity } from 'aframe-react';

export default class UpDownAnimation extends React.Component {

  render() {

    const { position } = this.props
    return (
      <a-animation
         attribute="position"
         from= {position.x + " " + position.y + " " + position.z}
         to= {position.x + " " + (position.y + 0.15) + " " + position.z}
         repeat="indefinite"
         direction="alternate">
      </a-animation>
    )
  }

}
