import aframe from 'aframe';
import React from 'react';
import { Entity } from 'aframe-react';

export default class ExhibitionBox2 extends React.Component {

  componentDidMount(){
    const box = document.getElementById('benj')
    //console.log(typeof box);
    //console.log(new aframe.THREE.MeshBasicMaterial());
    const boringMaterial1 = new aframe.THREE.MeshBasicMaterial({color: 0x880000})
    const boringMaterial2 = new aframe.THREE.MeshBasicMaterial({color: 0x008800})
    console.log(box);
    const po = box.getAttribute('position')
    console.log(po);
    //console.log(box.getObject3D('mesh'));
    // box.getObject3D('mesh').material = [
    //   neatMaterial,
    //   boringMaterial1,
    //   boringMaterial2,
    //   boringMaterial1,
    //   boringMaterial1,
    //   boringMaterial2
    // ]
  }

  render() {
    return (
      <Entity
        id="benj"
        material={{ src: "https://cdn.hyperdev.com/click-me.svg?1477239469954" }}
        geometry={ {primitive: "box"} }
        position={{x:0, y:0, z:-5}}
      />
    )
  }
}
