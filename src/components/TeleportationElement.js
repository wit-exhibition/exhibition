import React from 'react';
import { Entity } from 'aframe-react';

export default class TeleportationElement extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  teleport = (destination) => {
    var audio = new Audio('https://freesound.org/data/previews/162/162479_311243-lq.mp3');
    audio.play();
    setTimeout(
      () => {
        this.store.dispatch({ type: "CHANGE_ROOM", room: destination })
      }, 800
    )
  }

  render() {
    const { destination, handleClick, ...rest} = this.props
    return (
      <Entity
        id="teleport-box"
        primitive="a-box"
        {...this.props}
        events={{ click: () => this.teleport(destination) }}
      />
    )
  }
}
