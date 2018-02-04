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
import FloorTeleportation from './FloorTeleportation'
import Name from './Name';


class NewWaysRoom extends React.Component {

  constructor(props) {
    super(props);
  }

  renderEvelyn() {
    return (
      <Entity>
        <Lightbulb position="0 4 -2.8"/>

        <ExhibitionBox
          src={ "#evelynPortrait" }
          position={ "0 2.366 -2.8" }
          rotation={ "0 0 0" }
          scale={ "1.2 1.2 0" }
          >
            <PlayElement
              id="evelyn-play-element"
              soundID={"#evelyn-audio"}
              cursor-listener/>
            <Name name="Evelyn Boyd Granville" />
          </ExhibitionBox >
      </Entity>
    )
  }

  renderHedy() {
    return (
      <Entity>
         <Lightbulb position="-2 4 -2" />

        <ExhibitionBox
          src={ "#hedyPortrait" }
          position={ "-2 2.246 -2" }
          rotation={ "0 50 0" }
          scale={ "1.5 1.5 0" }
          >
            <PlayElement
              id="hedy-play-element"
              soundID={"#hedy-audio"}
              cursor-listener/>
            <Name name="Hedy Lamarr" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderKamila() {
    return (
      <Entity>
        <Lightbulb position="2 4 -2"/>

        <ExhibitionBox
          src={ "#kamilaPortrait" }
          position={ "2 2.318 -2" }
          rotation={ "0 -50 0" }
          scale={ "1.5 1.5 0" }
        >
          <PlayElement
            id="kamila-play-element"
            soundID={"#kamila-audio"}
            cursor-listener/>
          <Name name="Kamila Sidor" />
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
      evelynVisible,
      hedyVisible,
      kamilaVisible
     } = this.props

     const ROOM_COLOR = "#69ED11"

    return (
      <Entity>

      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"evelyn"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(evelynVisible) }
          cursor-listener />

        <Lamp position="0 4.2 -2.8"/>
        { evelynVisible ? this.renderEvelyn() : <Lightbulb position="0 4 -2.8" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"hedy"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(hedyVisible) }
          cursor-listener />

        <Lamp position="-2 4.2 -2"/>
        { hedyVisible ? this.renderHedy() : <Lightbulb position="-2 4 -2" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"kamila"}
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(kamilaVisible) }
          cursor-listener />

        <Lamp position="2 4.2 -2"/>
        { kamilaVisible ? this.renderKamila() : <Lightbulb position="2 4 -2" off={true}/> }

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
    evelynVisible: state.evelynVisible,
    hedyVisible: state.hedyVisible,
    kamilaVisible: state.kamilaVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const newWaysRoom = connect( mapStateToProps )(NewWaysRoom)

export default newWaysRoom;
