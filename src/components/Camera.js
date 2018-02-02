import React from 'react';
import { Entity } from 'aframe-react';

export default class Camera extends React.Component {

  render() {
    return (
      <Entity primitive="a-camera">
        <Entity
          id="cursor"
          primitive="a-cursor"
          geometry={{ primitive: 'ring', radiusInner: '0.02', radiusOuter: '0.03' }}
          material={{ color: 'white', shader: 'flat' }}/>
      </Entity>
    )
  }
}
