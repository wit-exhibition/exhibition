import React from 'react';
import { Entity } from 'aframe-react';

export default class LightSwitch extends React.Component {

  render() {
    return (
      <Entity
        id="light-switch"
        primitive="a-box"
        {...this.props}
      />
    )
  }
}
