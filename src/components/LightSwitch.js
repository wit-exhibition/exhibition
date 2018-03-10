import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

class LightSwitch extends React.Component {

  constructor(props) {
    super(props)
    this.roomColor = this.props.roomColor
    this.state = {
      "switchRotation":"-25 0 0",
      "position": "0 0.2 0.3"
    }
  }

  componentDidMount() {
    if (this.props.personClicked) {
      this.setState({"position":"0 -0.2 0.3"})
      this.setState({"switchRotation":"25 0 0"})
    }
    const switches = document.getElementsByClassName('light-switch')
    for (let i = 0; i < switches.length; i++) {
      switches[i].setAttribute('sound', 'on', 'click')
      switches[i].setAttribute('sound', 'src', '#switch-sound')
    }
  }

  switchOn() {
    this.setState({"position":"0 -0.2 0.3"})
    this.setState({"switchRotation":"25 0 0"})
    this.props.dispatch({ type: "SPOTLIGHT_ON", person: this.props.person }),
    this.props.dispatch({ type: "SWITCH" })
  }

  setRoomColor() {
    return this.roomColor !== undefined ? this.roomColor : "#680ebb"
  }

  render() {
    return (
      <Entity
        class="light-switch"
        primitive="a-box"
        scale={"0.2 0.2 0.2"}
        {...this.props}
        events={{ click: () => this.switchOn() }}>
        <Entity
          primitive="a-box"
          scale={"1.002 0.2 1"}
          position={ this.state.position }
          rotation={ this.state.switchRotation }
          material={ "color:" + this.setRoomColor() }>
        </Entity>
      </Entity>
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const lightSwitch = connect( null, mapDispatchToProps )(LightSwitch)

export default lightSwitch;
