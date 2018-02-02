import React from 'react';
import { Entity } from 'aframe-react';

export default class Name extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entity
        position={ "0.35 -0.65 0" }
        text={{ value: this.props.name, align: 'left', wrapCount: 16 }}/>
    )
  }
}
