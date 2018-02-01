import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

class FloorTeleportation extends React.Component {

  constructor(props) {
    super(props);
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
          this.props.dispatch({ type: "CHANGE_ROOM", room: destination })
        }, 2500
      )
    } else {
      this.props.dispatch({ type: "CHANGE_ROOM", room: destination })
    }

  }

  render() {
    const { destination, handleClick, ...rest} = this.props
    return (
      <Entity
        class="teleport-box"
        primitive={ "a-box" }
        shader={ "flat" }
        transparent={ "true" }
        scale={"1 1 0"}
        rotation={"-90 0 0"}
        {...this.props}
        events={{ click: () => this.teleport(destination,
          this.props.teleportSound) }}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const floorTeleportation = connect( null, mapDispatchToProps )(FloorTeleportation)

export default floorTeleportation;
