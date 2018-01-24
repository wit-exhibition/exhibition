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

class ActivistRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderChelsea() {
    return (
      <Entity>
        <a-sphere
          position="-2 4 -2"
          rotation="-70 0 0"
          material="color: white; shader: flat;"
          light="type: spot;angle: 25"
          radius="0.15"
          ></a-sphere>

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

  renderConstanzeNoLight() {
    return (
      <a-sphere
        position="0 4 -2.8"
        material="color: black; shader: flat;"
        radius="0.15"
      ></a-sphere>
    )
  }

  renderConstanze() {

    return (
      <Entity>
        <a-sphere
          position="0 4 -2.8"
          rotation="-70 0 0"
          material="color: white; shader: flat;"
          light="type: spot;angle: 25"
          radius="0.15"
          >
        </a-sphere>

        <ExhibitionBox
          id="constanze"
          src={ "#constanzePortrait" }
          position={ "0 2.6 -2.8" }
          rotation={ "0 0 0" }
          scale={ "1.3 1.65 0" }
        />

        <PlayElement
          src={ "#play-icon" }
          position={ "-0.002 1.6 -2.8" }
          sound="on: click; src: #constanze-audio; volume: 8"
        />
      </Entity>
    )
  }

  renderAudrey() {
    return (
      <Entity>
        <a-sphere
          position="2 4 -2"
          rotation="-70 0 0"
          material="color: white; shader: flat;"
          light="type: spot;angle: 25"
          radius="0.15"
          >
        </a-sphere>

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


        <Lamp position="-2 4.2 -2"/>
        { this.props.chelseaElementVisible && this.renderChelsea() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"constanze"}
          store={ this.store } />

        <Lamp position="0 4.2 -2.8"/>
        { this.props.constanzeElementVisible ? this.renderConstanze() : this.renderConstanzeNoLight()}

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"audrey"}
          store={ this.store } />

        <Lamp position="2 4.2 -2"/>
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
          destination="newWaysRoom"
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
