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

class NewWaysRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderEvelyn() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#evelynPortrait" }
        position={ "0 2.366 -2.8" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-0.002 1.653 -2.8" }
          sound="on: click; src: #evelyn-audio"
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
        <ExhibitionBox
        src={ "#hedyPortrait" }
        position={ "-2 2.246 -2" }
        rotation={ "0 50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-1.998 1.580 -2.014" }
          rotation={ "0 50 0" }
          sound="on: click; src: #hedy-audio"
          cursor-listener/>

        <Entity
          rotation={{x: "0", y: "50", z: "0" }}
          position= {{x: "-2", y: "3", z: "-2"}}
          text={{ value: "Hedy Lamarr", align: 'center',
          wrapCount: 8 }}/>
      </Entity>
    )
  }

  renderKamila() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#kamilaPortrait" }
        position={ "2 2.318 -2" }
        rotation={ "0 -50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "2 1.631 -1.989" }
          rotation={ "0 -50 0" }
          sound="on: click; src: #kamila-audio"
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

        { this.props.evelynElementVisible && this.renderEvelyn() }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"hedy"}
          store={ this.store }
          cursor-listener />

        { this.props.hedyElementVisible && this.renderHedy() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"kamila"}
          store={ this.store }
          cursor-listener />

        { this.props.kamilaElementVisible && this.renderKamila() }

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
