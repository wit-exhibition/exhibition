import React from 'react';
import { Entity } from 'aframe-react';

export default class Lightbulb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.off) {
      return (
        <a-sphere
          position={this.props.position}
          material={"color: #31085D; shader: flat;"}
          radius="0.15">
        </a-sphere>
      )
    } else {
      return (
        <a-sphere
          position={this.props.position}
          rotation="-70 0 0"
          material={"color: white; shader: flat;"}
          light="type: spot;angle: 25"
          radius="0.15">
        </a-sphere>
      )
    }
  }


}
