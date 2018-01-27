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

class MilestoneRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderBarbara() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#barbaraPortrait" }
        position={ "0.000 2.400 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-0.002 1.726 -2.029" }
          sound="on: click; src: #barbara-audio"/>
      </Entity>
    )
  }

  renderGrace() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#gracePortrait" }
        position={ "2 2.5 -2.5" }
        rotation={ "0 -50 0" }
        scale={ "1.3 1.65 0" }/>

      <PlayElement
        src={ "#play-icon" }
        position={ "2 1.7 -1.989" }
        rotation={ "0 -50 0" }
        sound="on: click; src: #grace-audio"/>
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
          store={ this.store } />

        { this.props.barbaraElementVisible && this.renderBarbara() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"grace"}
          store={ this.store } />

        { this.props.graceElementVisible && this.renderGrace() }

        <FloorIndicator src={ "#milestone-floor" }/>

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
          teleportSound={true}
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
          destination="spaceRoom"
          teleportSound={true}
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    barbaraElementVisible: state.barbaraElementVisible,
    graceElementVisible: state.graceElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked

  }
}

const milestoneRoom = connect( mapStateToProps )(MilestoneRoom)

export default milestoneRoom;
