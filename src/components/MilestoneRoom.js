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
import FloorTeleportation from './FloorTeleportation';
import Name from './Name';


class MilestoneRoom extends React.Component {

  constructor(props) {
    super(props);
  }

  renderBarbara() {
    return (
      <Entity>
        <Lightbulb position="0 3.7 -2"/>

        <ExhibitionBox
        src={ "#barbaraPortrait" }
        position={ "0 2.4 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }
        >
          <PlayElement
            id="barbara-play-element"
            soundID={"#barbara-audio"}
            cursor-listener/>
          <Name name="Barbara Liskow" />
        </ExhibitionBox >
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
        scale={ "1.5 1.5 0" }
        >
          <PlayElement
            id="grace-play-element"
            soundID={"#grace-audio"}
            cursor-listener/>
          <Name name="Grace Hopper" />
        </ExhibitionBox >
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
          scale={ "1.5 1.5 0" }
          >
          <PlayElement
            id="audrey-play-element"
            soundID={"#audrey-audio"}
            cursor-listener/>
          <Name name="Audrey Tang" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 10 }}
        clickHintAddition={"die Lichtschalter"}
        position={{ x: -0.5, y: 1.6, z: -1.4 }}
        wrapCount={25}
      />
    )
  }

  isVisible(personVisible) {
    return personVisible ? true : false
  }

  render() {
    const {
      anyLightSwitchClicked,
      barbaraVisible,
      graceVisible,
      audreyVisible
     } = this.props

    const ROOM_COLOR = "#C025CE"

    return (
      <Entity>

      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"barbara"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(barbaraVisible) }
          cursor-listener />

        <Lamp position="0 3.9 -2"/>
        { barbaraVisible ? this.renderBarbara() : <Lightbulb position="0 3.7 -2" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"grace"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(graceVisible) }
          cursor-listener />

        <Lamp position="2 3.9 -2"/>
        { graceVisible ? this.renderGrace() : <Lightbulb position="2 3.7 -2" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"audrey"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(audreyVisible) }
          cursor-listener />

        <Lamp position="-2 3.9 -2"/>
        { audreyVisible ? this.renderAudrey() : <Lightbulb position="-2 3.7 -2" off={true}/> }

        <FloorIndicator src={ "#milestone-floor" }/>

        <FloorTeleportation src={"#rails-floor"}
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5 "}
          teleportSound={true}
          destination={"newWaysRoom"}
          cursor-listener />

        <FloorTeleportation src={"#space-floor"}
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"spaceRoom"}
          cursor-listener />

        <HintText
          rotation={{ y: 100 }}
          hint={"Exit zum Navigationsraum"}
          position={{ x: -2.8, y: 1, z: 0.5}}
          wrapCount={16}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 0.5"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          teleportSound={true}
          cursor-listener />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    barbaraVisible: state.barbaraVisible,
    graceVisible: state.graceVisible,
    audreyVisible: state.audreyVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked

  }
}

const milestoneRoom = connect( mapStateToProps )(MilestoneRoom)

export default milestoneRoom;
