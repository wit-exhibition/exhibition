import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

export default class Environment extends React.Component {

  render () {
    return (
      <Entity>
        <Entity
            geometry="primitive:plane;height:10000;width:10000"
            rotation="-90 0 0"
            material="transparent:true;repeat:10000 10000;metalness:0.6;roughness:0.4;src:#groundTexture"
          />
        <Entity primitive="a-light" type="ambient" color="#3e4138"/>
        <Entity primitive="a-light" type="point" intensity="1" color="#eef3ff" position="2 6.5 0"/>
        <Entity primitive="a-sky" height="2048" radius="30" material="color:black" width="2048"/>
      </Entity>
    );
  }
}
