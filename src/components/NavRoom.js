import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import HintText from './HintText';
import PlayElement from './PlayElement';
import FloorTeleportation from './FloorTeleportation';
import Name from './Name';

class NavRoom extends React.Component {

  showHintText() {
    return (
      <HintText
        rotation={{ y: 20 }}
        clickHintAddition={ "das Play-Zeichen" }
        position={{ x: -1.1, y: 1.3, z: -2 }}
        wrapCount={20}
      />
    )
  }

  renderNavElements() {
    return (
      <Entity>

        <FloorTeleportation
          src={"#milestone-floor"}
          position={"-1.8 0.155 -1.7"}
          positionCylinder={"-1.8 0.1 -1.7"}
          teleportSound={true}
          destination={"milestoneRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#space-floor"}
          position={"-0.6 0.155 -1.7"}
          positionCylinder={"-0.6 0.1 -1.7"}
          teleportSound={true}
          destination={"spaceRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#rails-floor"}
          position={"0.6 0.155 -1.7"}
          positionCylinder={"0.6 0.1 -1.7"}
          teleportSound={true}
          destination={"newWaysRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#activist-floor"}
          position={"1.8 0.155 -1.7"}
          positionCylinder={"1.8 0.1 -1.7"}
          teleportSound={true}
          destination={"activistRoom"}
          cursor-listener/>

      </Entity>
    )
  }

  render() {
    const ada = this.props.ada

    return (
      <Entity>

        { !this.props.welcomeClicked && this.showHintText() }

        <ExhibitionBox
          src={ ada.picture }
          position={ ada.position }
          rotation={ ada.rotation }
          scale={"1.3 1.3 0"}
          transparent={"true"}
        >
          <PlayElement
            id="nav-play-element"
            soundID={ ada.sound }
            welcomeClicked={true}
            cursor-listener/>
          <Name name={ ada.name }/>
        </ExhibitionBox>

        { this.renderNavElements() }

      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    welcomeClicked: state.welcomeClicked,
    mode: state.mode,
    ada: state.ada
  }
}

const navRoom = connect( mapStateToProps )(NavRoom)

export default navRoom;
