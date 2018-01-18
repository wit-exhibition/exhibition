import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  render() {
    return (
      <a-entity geometry="primitive: cylinder; radius: 0.2; height: 0.05"
        material="color: #da517d"
        rotation="90 0 0"
        {...this.props}>
      </a-entity>
    )
  }
}
