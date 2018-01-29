import React from 'react';
import { Entity } from 'aframe-react';

export default class Name extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entity
        {...this.props}
        text={{ value: this.props.name, align: 'left', wrapCount: 16 }}/>
    )

  }
}
