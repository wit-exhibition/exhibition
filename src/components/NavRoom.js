import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';
import FloorTeleportation from './FloorTeleportation';
import Name from './Name';


class NavRoom extends React.Component {

  constructor(props) {
    super(props);
  }

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

        <FloorTeleportation src={"#milestone-floor"}
          position={"-1.8 0.1 -1.7"}
          teleportSound={true}
          destination={"milestoneRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#space-floor"}
          position={"-0.6 0.1 -1.7"}
          teleportSound={true}
          destination={"spaceRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#rails-floor"}
          position={"0.6 0.1 -1.7"}
          teleportSound={true}
          destination={"newWaysRoom"}
          cursor-listener/>

        <FloorTeleportation src={"#activist-floor"}
          position={"1.8 0.1 -1.7"}
          teleportSound={true}
          destination={"activistRoom"}
          cursor-listener/>
      </Entity>
    )
  }

  render() {
    return (
      <Entity>

        { !this.props.welcomeClicked && this.showHintText() }

        <ExhibitionBox
          src={ "#welcome" }
          position={ "0 2.1 -2"}
          rotation={"0 0 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
        >
          <PlayElement
            id="nav-play-element"
            soundID={"#welcome-audio"}
            welcomeClicked={true}
            cursor-listener/>
          <Name name={"Ada Lovelace"}/>
        </ExhibitionBox>

        { this.renderNavElements() }

      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    welcomeClicked: state.welcomeClicked,
    mode: state.mode
  }
}

const navRoom = connect( mapStateToProps )(NavRoom)

export default navRoom;
