import React from 'react';
import { Entity } from 'aframe-react';
import LightSwitchAnimation from './LightSwitchAnimation';

export default class LightSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    const switches = document.getElementsByClassName('light-switch')
    for (let i = 0; i < switches.length; i++) {
      switches[i].setAttribute('sound', 'on', 'click')
      switches[i].setAttribute('sound', 'src', '#switch-sound')
    }
  }

  switchOn() {
    this.store.dispatch({ type: "SPOTLIGHT_ON", person: this.props.person }),
    this.store.dispatch({ type: "SWITCH" })
  }

  render() {
    return (
      <Entity
        class="light-switch"
        primitive="a-box"
        {...this.props}
        events={{ click: () => this.switchOn() }}>
        <LightSwitchAnimation scale={{ x: 0.2, y: 0.2, z: 0.2 }}/>
      </Entity>

    )
  }
}
