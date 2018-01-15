import React from 'react';
import { Entity } from 'aframe-react';

export default class ExhibitionBox extends React.Component {

  render() {
    return (
      <Entity
        primitive={ "a-box" }
        shader={ "flat" }
        transparent={ "true" }
        {...this.props}
      />
    )
  }
}
