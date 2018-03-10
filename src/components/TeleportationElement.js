import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

class TeleportationElement extends React.Component {

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
          this.props.dispatch({ type: "CHANGE_ROOM", room: destination })
        }, 2500
      )
    } else {
      this.props.dispatch({ type: "CHANGE_ROOM", room: destination })
    }

  }

  render() {
    const { destination } = this.props
    return (
      <Entity
        class="teleport-box"
        primitive="a-box"
        {...this.props}
        events={{ click: () => this.teleport(destination,
          this.props.teleportSound) }}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const teleportationElement = connect( null, mapDispatchToProps )(TeleportationElement)

export default teleportationElement;
