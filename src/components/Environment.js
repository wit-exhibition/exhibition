import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

export default class Environment extends React.Component {

  render () {
    return (
      <Entity>
        <Entity primitive="a-plane" src="#groundTexture" roughness="1" rotation="-90 0 0" height="70" width="70"/>
        <Entity
          primitive="a-light"
          type="ambient"
          color="#3e4138"/>
        <Entity
          primitive="a-light"
          type="point"
          intensity="1"
          color="#eef3ff"
          position="0 15.686 9.615"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
      </Entity>
    )
  }
}
