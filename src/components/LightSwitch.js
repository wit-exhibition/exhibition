import React from 'react';
import { Entity } from 'aframe-react';
import LightSwitchAnimation from './LightSwitchAnimation';

export default class LightSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  switchOn() {
    //TODO Mention in Readme: Sound by jobro from https://freesound.org/people/jobro/sounds/75637/
    var audio = new Audio('https://freesound.org/data/previews/75/75637_35187-lq.mp3');
    audio.play();

    this.store.dispatch({ type: "SPOTLIGHT_ON", person: this.props.person }),
    this.store.dispatch({ type: "SWITCH" })
  }

  render() {
    return (
      <Entity
        id="light-switch"
        primitive="a-box"
        {...this.props}
        events={{ click: () => { this.switchOn() }
        }}>
        <LightSwitchAnimation scale={{ x: 0.2, y: 0.2, z: 0.2 }}/>
      </Entity>

    )
  }
}
