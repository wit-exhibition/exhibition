import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import FloorIndicator from './FloorIndicator';
import Lamp from './Lamp';
import Lightbulb from './Lightbulb';
import FloorTeleportation from './FloorTeleportation'
import Person from './Person';

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

  isVisible(personVisible) {
    return personVisible ? true : false
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

        <FloorIndicator src={ "#space-floor" }/>

        <FloorTeleportation src={"#milestone-floor"}
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5 "}
          teleportSound={true}
          destination={"milestoneRoom"}
          cursor-listener />

        <FloorTeleportation src={"#activist-floor"}
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"activistRoom"}
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
    margaret: state.margaret,
    dorothy: state.dorothy,
    anuradha: state.anuradha,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const spaceRoom = connect( mapStateToProps )(SpaceRoom)

export default spaceRoom;
