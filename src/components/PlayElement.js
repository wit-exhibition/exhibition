import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  render() {
    return (
      <Entity
        primitive={ "a-box" }
        scale={ "0.5 0.2 0" }
        {...this.props}>
      </Entity>
    )
  }
}
