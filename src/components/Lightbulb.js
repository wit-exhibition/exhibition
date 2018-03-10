import React from 'react';

export default class Lightbulb extends React.Component {

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
          rotation="-80 0 0"
          material={"color: white; shader: flat;"}
          light="type: spot;angle: 25"
          radius="0.15">
        </a-sphere>
      )
    }
  }
}
