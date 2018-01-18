import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  render() {
    return (
      <a-entity geometry="primitive: cylinder; radius: 0.1; height: 0.05"
      material="color: grey"
      position="-0.7 1.5 -0.7"
      rotation="90 0 0">
    </a-entity>
    )
  }
}
