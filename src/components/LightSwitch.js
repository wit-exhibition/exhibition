import React from 'react';
import { Entity } from 'aframe-react';

export default class LightSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store
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
    this.store.dispatch({ type: "SPOTLIGHT_ON", person: this.props.person }),
    this.store.dispatch({ type: "SWITCH" })
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
          rotation= { this.state.switchRotation }
          material="color:#680ebb">
        </Entity>
      </Entity>

    )
  }
}
