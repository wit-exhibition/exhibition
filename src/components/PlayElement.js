import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  render() {
    return (
      <a-entity
        material="side: double; color: #77ff03"
        {...this.props}>
      </a-entity>
    )
  }
}
