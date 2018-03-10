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

class ActivistRoom extends React.Component {

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
      chelsea,
      constanze,
      joanna
     } = this.props

    return (

      <Entity>
        { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"chelsea"}
          personClicked={ chelsea.visible }
          cursor-listener />

        <Lamp position="-2 4.2 -2"/>
        { chelsea.visible ? <Person person={ chelsea } /> : <Lightbulb position="-2 4 -2" off={true}/> }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"constanze"}
          personClicked={ constanze.visible }
          cursor-listener />

        <Lamp position="0 4.2 -2.8"/>
        { constanze.visible ? <Person person={ constanze } /> : <Lightbulb position="0 4 -2.8" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"joanna"}
          personClicked={ joanna.visible }
          cursor-listener />

        <Lamp position="2 4.2 -2"/>
        { joanna.visible ? <Person person={ joanna } /> : <Lightbulb position="2 4 -2" off={true}/> }

        <FloorNavigation
          roomIndicator={ "#activist-floor" }
          leftIndicator={"#space-floor"} leftDestination={"spaceRoom"}
          rightIndicator={"#rails-floor"} rightDestination={"newWaysRoom"}
        />

        <Exit />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    anyLightSwitchClicked: state.anyLightSwitchClicked,
    chelsea: state.chelsea,
    constanze: state.constanze,
    joanna: state.joanna
  }
}
const mapDispatchToProps = dispatch => ({ dispatch })

const activistRoom = connect( mapStateToProps, mapDispatchToProps )(ActivistRoom)

export default activistRoom;
