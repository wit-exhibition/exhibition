import React from 'react';
import { Entity } from 'aframe-react';

export default class TeleportationElement extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    const boxes = document.getElementsByClassName('teleport-box')
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].setAttribute('sound', 'on', 'click')
      boxes[i].setAttribute('sound', 'src', '#teleport')
    }
  }

  teleport = (destination, teleportSound) => {
    if (teleportSound) {
      setTimeout(
        () => {
          this.store.dispatch({ type: "CHANGE_ROOM", room: destination })
        }, 2500
      )
    } else {
      this.store.dispatch({ type: "CHANGE_ROOM", room: destination })
    }

  }

  render() {
    const { destination, handleClick, ...rest} = this.props
    return (
      <Entity
        class="teleport-box"
        primitive="a-box"
        {...this.props}
        events={{ click: () => this.teleport(destination, this.props.teleportSound) }}
      />
    )
  }
}
