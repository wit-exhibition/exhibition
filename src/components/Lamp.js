import React from 'react';
import { Entity } from 'aframe-react';

export default class Lamp extends React.Component {

  render() {
    return (
      <Entity>
        <a-cone
          radius-bottom="0.2"
          radius-top="0.001"
          {...this.props}
          height="0.3"
          shader="flat"
          material="color: #680ebb; shader: flat"
        >
          <a-cone
            height="1.3"
            radius-top="0.001"
            radius-bottom="0.02"
            position="0 0.4 0"
            material="color: #680ebb">
          </a-cone>
        </a-cone>
      </Entity>
    )
  }
}
