import aframe from 'aframe';
import React from 'react';
import { Entity } from 'aframe-react';

export default class ExhibitionBox2 extends React.Component {

  componentDidMount(){
    setTimeout( () => {
      const box = document.getElementById('benj')
      console.log(typeof box);
      const boringMaterial1 = new aframe.THREE.MeshBasicMaterial({color: 0x880000})
      const boringMaterial2 = new aframe.THREE.MeshBasicMaterial({color: 0x008800})
      const neatMaterial = box.components.material.material // gets the original material with the texture
      console.log(box);
      box.getObject3D('mesh').material = [
        neatMaterial,
        boringMaterial1,
        boringMaterial2,
        boringMaterial1,
        boringMaterial1,
        boringMaterial2
      ]
    }, 100)
  }

  render() {
    return (
      <a-entity id="benj" material="src:https://cdn.hyperdev.com/click-me.svg?1477239469954" geometry="primitive: box" position="0 0 -5" />
    )
  }
}
