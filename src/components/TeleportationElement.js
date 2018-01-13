import React from 'react';
import { Entity } from 'aframe-react';

export default class TeleportationElement extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    const { destination, handleClick, ...rest} = this.props

    return (
      <Entity
        id="teleport-box"
        primitive="a-box"
        {...this.props}
        events={{ click: () => this.store.dispatch({ type: "CHANGE_ROOM"}) }}
      />
    )
  }
}
