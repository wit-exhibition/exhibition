import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import FloorIndicator from './FloorIndicator';
import Lamp from './Lamp';
import Lightbulb from './Lightbulb';
import FloorTeleportation from './FloorTeleportation'
import Name from './Name';


class ActivistRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderChelsea() {
    return (
      <Entity>
        <Lightbulb position="-2 4 -2"/>

        <ExhibitionBox
          src={ "#chelseaPortrait" }
          position={ "-2 2.5 -2" }
          rotation={ "0 50 0" }
          scale={"1.5 1.5 0"}
        >
          <PlayElement
            id="chelsea-play-element"
            soundID={"#chelsea-audio"}
            cursor-listener/>
          <Name name="Chelsea Manning" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderConstanze() {
    return (
      <Entity>
        <Lightbulb position="0 4 -2.8"/>

        <ExhibitionBox
          id="constanze"
          src={ "#constanzePortrait" }
          position={ "0 2.6 -2.8" }
          rotation={ "0 0 0" }
          scale={ "1.5 1.5 0" }
        >
        <PlayElement
          id="constanze-play-element"
          soundID={"#constanze-audio"}
          cursor-listener/>
        <Name name="Constanze Kurz" />
        </ExhibitionBox >


      </Entity>
    )
  }

  renderJoanna() {
    return (
      <Entity>
        <Lightbulb position="2 4 -2"/>

        <ExhibitionBox
          src={ "#joanna" }
          position={ "2 2.5 -2" }
          rotation={ "0 -50 0" }
          scale={ "1.5 1.5 0" }
        >
          <PlayElement
            id="joanna-play-element"
            soundID={"#joanna-audio"}
            cursor-listener/>
          <Name name="Joanna Rutkowska" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 10 }}
        store={ this.store }
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
      chelseaVisible,
      constanzeVisible,
      joannaVisible
     } = this.props

    return (
      <Entity>
        { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"chelsea"}
          store={ this.store }
          personClicked= { this.isVisible(chelseaVisible) }
          cursor-listener />

        <Lamp position="-2 4.2 -2"/>
        { chelseaVisible ? this.renderChelsea() : <Lightbulb position="-2 4 -2" off={true}/> }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"constanze"}
          store={ this.store }
          personClicked= { this.isVisible(constanzeVisible) }
          cursor-listener />

        <Lamp position="0 4.2 -2.8"/>
        { this.props.constanzeVisible ? this.renderConstanze() : <Lightbulb position="0 4 -2.8" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"joanna"}
          store={ this.store }
          personClicked= { this.isVisible(constanzeVisible) }
          cursor-listener />

        <Lamp position="2 4.2 -2"/>
        { this.props.joannaVisible ? this.renderJoanna() : <Lightbulb position="2 4 -2" off={true}/> }

        <FloorIndicator src={ "#activist-floor" }/>

        <FloorTeleportation src={"#space-floor"}
          position={"-1.5 0.155 -1.5"}
          positionCylinder={"-1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"spaceRoom"}
          store={ this.store }
          cursor-listener />

        <FloorTeleportation src={"#rails-floor"}
          position={"1.5 0.155 -1.5"}
          positionCylinder={"1.5 0.1 -1.5"}
          teleportSound={true}
          destination={"newWaysRoom"}
          store={ this.store }
          cursor-listener />


        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          teleportSound={true}
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store }
          cursor-listener />

      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    chelseaVisible: state.chelseaVisible,
    constanzeVisible: state.constanzeVisible,
    joannaVisible: state.joannaVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const activistRoom = connect( mapStateToProps )(ActivistRoom)

export default activistRoom;
