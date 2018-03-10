import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import LightSwitch from './LightSwitch';
import HintText from './HintText';
import Lamp from './Lamp';
import Lightbulb from './Lightbulb';
import Person from './Person';
import Exit from './Exit';
import FloorNavigation from './FloorNavigation';

class SpaceRoom extends React.Component {

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

  render() {
    const {
      anyLightSwitchClicked,
      margaret,
      dorothy,
      anuradha
     } = this.props

     const ROOM_COLOR = "#00748B"

    return (
      <Entity>
      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"margaret"}
          roomColor={ROOM_COLOR}
          personClicked= { margaret.visible }
          cursor-listener />

        <Lamp position="0 3.7 -2"/>
        { margaret.visible ? <Person person={ margaret } /> : <Lightbulb position="0 3.5 -2" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"dorothy"}
          roomColor={ROOM_COLOR}
          personClicked= { dorothy.visible }
          cursor-listener />

        <Lamp position="-1.6 3.7 -1.6"/>
        { dorothy.visible ? <Person person={ dorothy } /> : <Lightbulb position="-1.6 3.5 -1.6" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"anuradha"}
          roomColor={ROOM_COLOR}
          personClicked= { anuradha.visible }
          cursor-listener />

        <Lamp position="1.6 3.7 -1.6"/>
        { anuradha.visible ? <Person person={ anuradha } /> : <Lightbulb position="1.6 3.5 -1.6" off={true}/> }

        <FloorNavigation
          roomIndicator={ "#space-floor" }
          leftIndicator={"#milestone-floor"} leftDestination={"milestoneRoom"}
          rightIndicator={"#activist-floor"} rightDestination={"activistRoom"}
        />

        <Exit />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    margaret: state.margaret,
    dorothy: state.dorothy,
    anuradha: state.anuradha,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const spaceRoom = connect( mapStateToProps )(SpaceRoom)

export default spaceRoom;
