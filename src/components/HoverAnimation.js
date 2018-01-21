import React from 'react';
import { Entity } from 'aframe-react';

export default class HoverAnimation extends React.Component {

  render() {

    const { scale } = this.props

    return (
      <a-animation
        begin="mouseenter"
        end="mouseleave"
        attribute="scale"
        from={scale.x + " " + scale.y + " " + scale.z}
        to={(scale.x + 0.04) + " " + (scale.y + 0.04) + " " + scale.z}
        easing="linear"
        dur="200"
        fill="backwards">
      </a-animation>
    )
  }
}
