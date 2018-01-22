import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import FloorIndicator from './FloorIndicator';

class ActivistRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderChelsea() {
    return (
      <Entity>
        <ExhibitionBox
          src={ "#chelseaPortrait" }
          position={ "-2 2.5 -2" }
          rotation={ "0 50 0" }
          scale={"1.3 1.6 0"}
        />

        <PlayElement
          src={ "#play-icon" }
          position={ "-1.900 1.570 -1.939" }
          rotation={ "0 50 0" }
          sound="on: click; src: #chelsea-audio"
        />
      </Entity>
    )
  }

  renderConstanze() {
    return (
      <Entity>
        <ExhibitionBox
          src={ "#constanzePortrait" }
          position={ "0 2.6 -2.9" }
          rotation={ "0 0 0" }
          scale={ "1.3 1.65 0" }
        />

        <PlayElement
          src={ "#play-icon" }
          position={ "-0.002 1.6 -2.912" }
          sound="on: click; src: #constanze-audio; volume: 8"
        />
      </Entity>
    )
  }

  renderAudrey() {
    return (
      <Entity>
        <ExhibitionBox
          src={ "#audreyPortrait" }
          position={ "2 2.5 -2" }
          rotation={ "0 -50 0" }
          scale={ "1.6 1.3 0" }
        />

        <PlayElement
          src={ "#play-icon" }
          position={ "2 1.7 -1.989" }
          rotation={ "0 -50 0" }
          sound="on: click; src: #audrey-audio"
        />
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
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"chelsea"}
          store={ this.store } />

        { this.props.chelseaElementVisible && this.renderChelsea() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"constanze"}
          store={ this.store } />

        { this.props.constanzeElementVisible && this.renderConstanze() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"audrey"}
          store={ this.store } />

        { this.props.audreyElementVisible && this.renderAudrey() }

        <FloorIndicator src={ "#activist-floor" }/>

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
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="firstRoom"
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    chelseaElementVisible: state.chelseaElementVisible,
    constanzeElementVisible: state.constanzeElementVisible,
    audreyElementVisible: state.audreyElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const activistRoom = connect( mapStateToProps )(ActivistRoom)

export default activistRoom;
