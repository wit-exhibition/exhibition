import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  render() {
    return (
      <Entity
        material="side: double; color: #77ff03"
        {...this.props}>
      </Entity>
    )
  }
}
