import React from 'react';
import { Entity } from 'aframe-react';
import UpDownAnimation from './UpDownAnimation';

export default class HintText extends React.Component {

  render() {

    const { hint, position, rotation, wrapCount } = this.props
    return (
      <Entity
        rotation={{x: "0", y: rotation.y, z: "0" }}
        text={{ value: hint, align: 'center', wrapCount: wrapCount }}>
         <UpDownAnimation position={{ x: position.x, y: position.y, z: position.z }}/>
      </Entity>
    )
  }

}
