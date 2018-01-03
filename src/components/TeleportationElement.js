import React from 'react';
import { Entity } from 'aframe-react';

export default class TeleportationElement extends React.Component {

  render() {
    const { destination, handleClick, ...rest} = this.props
    return <Entity id="e-box" primitive="a-box" {...this.props} events={{ click: () => handleClick(destination) }}></Entity>
  }

}
