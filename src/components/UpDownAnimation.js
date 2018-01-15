import React from 'react';

export default class UpDownAnimation extends React.Component {

  render() {

    const { position } = this.props
    return (
      <a-animation
         attribute="position"
         from={position.x + " " + position.y + " " + position.z}
         to={position.x + " " + (position.y + 0.08) + " " + position.z}
         repeat="indefinite"
         dur="1200"
         direction="alternate">
      </a-animation>
    )
  }

}
