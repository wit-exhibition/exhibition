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

class NewWaysRoom extends React.Component {

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
      evelyn,
      hedy,
      kamila
     } = this.props

     const ROOM_COLOR = "#69ED11"

    return (
      <Entity>

      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"evelyn"}
          roomColor={ROOM_COLOR}
          personClicked={ evelyn.visible }
          cursor-listener />

        <Lamp position="0 4.2 -2.8"/>
        { evelyn.visible ? <Person person={ evelyn } /> : <Lightbulb position="0 4 -2.8" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"hedy"}
          roomColor={ROOM_COLOR}
          personClicked={ hedy.visible }
          cursor-listener />

        <Lamp position="-2 4.2 -2"/>
        { hedy.visible ? <Person person={ hedy } /> : <Lightbulb position="-2 4 -2" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"kamila"}
          roomColor={ROOM_COLOR}
          personClicked={ kamila.visible }
          cursor-listener />

        <Lamp position="2 4.2 -2"/>
        { kamila.visible ? <Person person={ kamila } /> : <Lightbulb position="2 4 -2" off={true}/> }

        <FloorIndicator src={ "#rails-floor" }/>

        <FloorTeleportation src={"#activist-floor"}
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"activistRoom"}
          cursor-listener />

        <FloorTeleportation src={"#milestone-floor"}
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"milestoneRoom"}
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
    evelyn: state.evelyn,
    hedy: state.hedy,
    kamila: state.kamila,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const newWaysRoom = connect( mapStateToProps )(NewWaysRoom)

export default newWaysRoom;
