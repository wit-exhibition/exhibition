import React from 'react';
import { Entity } from 'aframe-react';

export default class ExhibitionBox extends React.Component {

  render() {
    return <Entity id="e-box" primitive="a-box" {...this.props} ></Entity>
  }

}
