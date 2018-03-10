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

        <FloorNavigation
          roomIndicator={ "#rails-floor" }
          leftIndicator={"#activist-floor"} leftDestination={"activistRoom"}
          rightIndicator={"#milestone-floor"} rightDestination={"milestoneRoom"}
        />

        <Exit />
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
