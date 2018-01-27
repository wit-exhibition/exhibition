import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';
import FloorIndicator from './FloorIndicator';
import Lamp from './Lamp';
import Lightbulb from './Lightbulb';

class MilestoneRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderBarbara() {
    return (
      <Entity>
        <Lightbulb position="0 3.7 -2"/>

        <ExhibitionBox
        src={ "#barbaraPortrait" }
        position={ "0 2.4 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          id="barbara-play-element"
          soundID={"#barbara-audio"}
          position={ "-0.002 1.726 -2.029" }
          cursor-listener />
      </Entity>
    )
  }

  renderGrace() {
    return (
      <Entity>
        <Lightbulb position="2 3.7 -2" />

        <ExhibitionBox
        src={ "#gracePortrait" }
        position={ "2 2.5 -2" }
        rotation={ "0 -50 0" }
        scale={ "1.3 1.65 0" }/>

      <PlayElement
        id="grace-play-element"
        soundID={"#grace-audio"}
        position={ "2 1.55 -1.989" }
        rotation={ "0 -50 0" }
        cursor-listener />
      </Entity>
    )
  }

  renderAudrey() {
    return (
      <Entity>
        <Lightbulb position="-2 3.7 -2" />

        <ExhibitionBox
        src={ "#audreyPortrait" }
        position={ "-2 2.5 -2" }
        rotation={ "0 50 0" }
        scale={ "1.45 1.2 0" }/>

      <PlayElement
        id="audrey-play-element"
        soundID={"#audrey-audio"}
        position={ "-1.900 1.570 -1.939" }
        rotation={ "0 50 0" }
        cursor-listener />
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
          person={"barbara"}
          store={ this.store }
          cursor-listener />

        <Lamp position="0 3.9 -2"/>
        { this.props.barbaraElementVisible ? this.renderBarbara() : <Lightbulb position="0 3.7 -2" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"grace"}
          store={ this.store }
          cursor-listener />

        <Lamp position="2 3.9 -2"/>
        { this.props.graceElementVisible ? this.renderGrace() : <Lightbulb position="2 3.7 -2" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"audrey"}
          store={ this.store }
          cursor-listener />

        <Lamp position="-2 3.9 -2"/>
        { this.props.audreyElementVisible ? this.renderAudrey() : <Lightbulb position="-2 3.7 -2" off={true}/> }

        <FloorIndicator src={ "#milestone-floor" }/>

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: 0.6 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3.000 0.500 0.634"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          teleportSound={true}
          store={ this.store }
          cursor-listener />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: 0.6 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 0.631"}
          scale={"0.5 0.5 1"}
          destination="spaceRoom"
          teleportSound={true}
          store={ this.store }
          cursor-listener />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    barbaraElementVisible: state.barbaraElementVisible,
    graceElementVisible: state.graceElementVisible,
    audreyElementVisible: state.audreyElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked

  }
}

const milestoneRoom = connect( mapStateToProps )(MilestoneRoom)

export default milestoneRoom;
