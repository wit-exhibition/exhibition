import React from 'react';
import { Entity } from 'aframe-react';

export default class LightSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <Entity
        id="light-switch"
        primitive="a-box"
        {...this.props}
        events={{ click: () => {
          this.store.dispatch({ type: "SPOTLIGHT_ON", person: this.props.person }),
          this.store.dispatch({ type: "SWITCH" })
          }
        }}
      />
    )
  }
}
