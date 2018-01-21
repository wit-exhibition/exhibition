import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';

class FirstRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderGrace() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#gracePortrait" }
        position={ "0 2.6 -2.9" }
        rotation={ "0 0 0" }
        scale={ "1.3 1.65 0" }
        sound="on: click; src: #grace-audio"/>

        <PlayElement geometry="primitive: plane; height: 0.2; width: 0.5"
          position={ "-0.002 1.6 -2.912" }/>
      </Entity>
    )
  }

  renderJoanna() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#joanna" }
        position={ "2 2.5 -2" }
        rotation={ "0 -50 0" }
        scale={ "1.3 1.3 0" }
        sound="on: click; src: #ada-audio"/>

      <PlayElement geometry="primitive: plane; height: 0.2; width: 0.5"
        position={ "2 1.7 -1.989" }
        rotation={ "0 -50 0" }/>
      </Entity>
    )
  }

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 20 }}
        hint={"Klick auf die Lichtschalter!"}
        position={{ x: -0.5, y: 1.6, z: -1.4 }}
        wrapCount={20}
      />
    )
  }

  render() {
    return (
      <Entity>

      { !this.props.anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"grace"}
          store={ this.store } />

        { this.props.graceElementVisible && this.renderGrace() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"joanna"}
          store={ this.store } />

        { this.props.joannaElementVisible && this.renderJoanna() }

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
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="secondRoom"
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    graceElementVisible: state.graceElementVisible,
    adaElementVisible: state.adaElementVisible,
    joannaElementVisible: state.joannaElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const firstRoom = connect( mapStateToProps )(FirstRoom)

export default firstRoom;
