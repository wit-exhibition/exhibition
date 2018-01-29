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

class NewWaysRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderEvelyn() {
    return (
      <Entity>
        <Lightbulb position="0 4 -2.8"/>

        <ExhibitionBox
        src={ "#evelynPortrait" }
        position={ "0 2.366 -2.8" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          id="evelyn-play-element"
          soundID={"#evelyn-audio"}
          position={ "-0.002 1.653 -2.8" }
          cursor-listener/>

        <Entity
          rotation={{x: "0", y: "0", z: "0" }}
          position= {{x: "0", y: "3.3", z: "-2.8"}}
          text={{ value: "Evelyn Boyd Granville", align: 'center',
          wrapCount: 8 }}/>
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
        scale={ "1 1 0" }/>

        <PlayElement
          id="hedy-play-element"
          soundID={"#hedy-audio"}
          position={ "-2.296 1.560 -1.633" }
          rotation={ "0 50 0" }
          cursor-listener/>

        <Entity
          rotation={{x: "0", y: "50", z: "0" }}
          position= {{x: "-1", y: "1.560", z: "-1.633"}}
          text={{ value: "Hedy Lamarr", align: 'left',
          wrapCount: 16 }}/>
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
        scale={ "1 1 0" }/>

        <PlayElement
          id="kamila-play-element"
          soundID={"#kamila-audio"}
          position={ "2 1.631 -1.989" }
          rotation={ "0 -50 0" }
          cursor-listener/>

        <Entity
          rotation={{x: "0", y: "-50", z: "0" }}
          position= {{x: "2", y: "3.1", z: "-2"}}
          text={{ value: "Kamila Sidor", align: 'center',
          wrapCount: 8 }}/>
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
          person={"evelyn"}
          store={ this.store }
          cursor-listener />

        <Lamp position="0 4.2 -2.8"/>
        { this.props.evelynElementVisible ? this.renderEvelyn() : <Lightbulb position="0 4 -2.8" off={true}/> }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"hedy"}
          store={ this.store }
          cursor-listener />

        <Lamp position="-2 4.2 -2"/>
        { this.props.hedyElementVisible ? this.renderHedy() : <Lightbulb position="-2 4 -2" off={true}/> }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"kamila"}
          store={ this.store }
          cursor-listener />

        <Lamp position="2 4.2 -2"/>
        { this.props.kamilaElementVisible ? this.renderKamila() : <Lightbulb position="2 4 -2" off={true}/> }

        <FloorIndicator src={ "#rails-floor" }/>

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: 0.6 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3.000 0.500 0.634"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store }
          cursor-listener />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: 0.6 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 0.631"}
          scale={"0.5 0.5 1"}
          destination="milestoneRoom"
          store={ this.store }
          cursor-listener />
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    evelynElementVisible: state.evelynElementVisible,
    hedyElementVisible: state.hedyElementVisible,
    kamilaElementVisible: state.kamilaElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const newWaysRoom = connect( mapStateToProps )(NewWaysRoom)

export default newWaysRoom;
