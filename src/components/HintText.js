import React from 'react';
import { Entity } from 'aframe-react';
import UpDownAnimation from './UpDownAnimation';

export default class HintText extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.hint = this.props.hint
  }

  render() {
    const { hint, position, rotation, wrapCount, clickHintAddition } = this.props

    if (clickHintAddition) {
      if (this.store.getState().mode === "cardboard") {
        this.hint = `Fixiere ${clickHintAddition} mit dem Cursor`
      } else if (this.store.getState().mode === "desktop") {
        this.hint = `Bewege den Cursor \n ${clickHintAddition} und klicke!`
      } else {
        this.hint = ""
      }
    }

    return (
      <Entity
        rotation={{x: "0", y: rotation.y, z: "0" }}
        text={{ value: this.hint, align: 'center', wrapCount: wrapCount }}>
         <UpDownAnimation position={{ x: position.x, y: position.y, z: position.z }}/>
      </Entity>
    )
  }
}
