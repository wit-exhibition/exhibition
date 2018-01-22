import React from 'react';
import { Entity } from 'aframe-react';

import ExhibitionBox from './ExhibitionBox';
import ExhibitionBox2 from './ExhibitionBox2';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';


export default class SecondRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <Entity>
        <ExhibitionBox src={ "#grace" } position={ "-2 2.2 -4"} />
        <ExhibitionBox src={ "#grace" } position={ "0.5 3 -4.3"} />
        <ExhibitionBox src={ "#grace" } position={ "3 2 -4.3"} />

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -2 }}
          wrapCount={8}/>

        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store }/>,

        <HintText rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>

        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="firstRoom"
          store={ this.store }/>
      </Entity>
    )
  }

}
