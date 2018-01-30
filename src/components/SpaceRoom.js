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
import Name from './Name';

class SpaceRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderMargaret() {
    return (
      <Entity>
        <Lightbulb position="0 3.5 -2"/>

        <ExhibitionBox
        src={ "#margaretPortrait" }
        position={ "0 2.25 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }
        >
          <PlayElement
            id="margaret-play-element"
            soundID={"#margaret-audio"}
            cursor-listener/>
          <Name name="Margaret Hamilton" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderDorothy() {
    return (
      <Entity>
        <Lightbulb position="-1.6 3.5 -1.6"/>

        <ExhibitionBox
        src={ "#dorothyPortrait" }
        position={ "-1.6 2.3 -1.6" }
        rotation={ "0 50 0" }
        scale={ "1 1 0" }
        >
          <PlayElement
            id="dorothy-play-element"
            soundID={"#dorothy-audio"}
            cursor-listener/>
          <Name name="Dorothy Vaughan" />
        </ExhibitionBox >
      </Entity>
    )
  }

  renderAnuradha() {
    return (
      <Entity>
        <Lightbulb position="1.6 3.5 -1.6"/>

        <ExhibitionBox
        src={ "#anuradhaPortrait" }
        position={ "1.6 2.3 -1.6" }
        rotation={ "0 -50 0" }
        scale={ "1 1 0" }
        >
          <PlayElement
            id="anuradha-play-element"
            soundID={"#anuradha-audio"}
            cursor-listener/>
          <Name name="Anuradha TK" />
        </ExhibitionBox >
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

  isVisible(personVisible) {
    return personVisible ? true : false
  }

  render() {
    const {
      anyLightSwitchClicked,
      margaretVisible,
      dorothyVisible,
      anuradhaVisible
     } = this.props

     const ROOM_COLOR = "#00748B"

    return (
      <Entity>
      { !anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          person={"margaret"}
          store={ this.store }
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(margaretVisible) }
          cursor-listener />

        <Lamp position="0 3.7 -2"/>
        { margaretVisible ? this.renderMargaret() : <Lightbulb position="0 3.5 -2" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          person={"dorothy"}
          store={ this.store }
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(dorothyVisible) }
          cursor-listener />

        <Lamp position="-1.6 3.7 -1.6"/>
        { dorothyVisible ? this.renderDorothy() : <Lightbulb position="-1.6 3.5 -1.6" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          person={"anuradha"}
          store={ this.store }
          roomColor={ROOM_COLOR}
          personClicked= { this.isVisible(anuradhaVisible) }
          cursor-listener />

        <Lamp position="1.6 3.7 -1.6"/>
        { anuradhaVisible ? this.renderAnuradha() : <Lightbulb position="1.6 3.5 -1.6" off={true}/> }

        <FloorIndicator src={ "#space-floor" }/>

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
          store={ this.store }
          cursor-listener />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="activistRoom"
          teleportSound={true}
          store={ this.store }
          cursor-listener />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    margaretVisible: state.margaretVisible,
    dorothyVisible: state.dorothyVisible,
    anuradhaVisible: state.anuradhaVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const spaceRoom = connect( mapStateToProps )(SpaceRoom)

export default spaceRoom;
