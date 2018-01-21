import React from 'react';
import { Entity } from 'aframe-react';

export default class HoverAnimation extends React.Component {

  render() {
    console.log("IT IS BROKEN");
    return (
      <a-animation
        begin="mouseenter"
        end="mouseleave"
        attribute="scale"
        from="0.400 0.400 0" to="0.450 0.450 0"
        easing="linear" dur="100" fill="both">
      </a-animation>
    )
  }
}
