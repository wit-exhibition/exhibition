import React from 'react';
import { Entity } from 'aframe-react';

export default class LightSwitchAnimation extends React.Component {

  render() {

    const { scale } = this.props

    return (
      <a-animation
        begin="mouseenter"
        attribute="scale"
        from={scale.x + " " + scale.y + " " + scale.z}
        to={(scale.x + 0.04) + " " + (scale.y + 0.04) + " " + (scale.z + 0.04)}
        easing="linear"
        dur="1500">
      </a-animation>
    )
  }
}
