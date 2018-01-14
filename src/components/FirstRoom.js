import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';



class FirstRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderPortrait(isVisible, srcID, positionData, rotationData, scaleData) {
    if (isVisible === true) {
      return (
        <ExhibitionBox
        src={ srcID }
        position={ positionData }
        rotation={rotationData}
        scale={scaleData}
        shader={"flat"}
        transparent={"true"}
        sound="on: click; src: #ada-audio"
      />)
    }
  }

  renderAda() {
    if (this.store.getState().adaElementVisible === true) {
      return (
        <ExhibitionBox
          src={ "#welcome" }
          position={"-2 2.1 -2"}
          rotation={"0 50 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />)
    }
    else {
      console.log("else case")
    }
  }

  renderJoanna() {
    if (this.store.getState().joannaElementVisible === true) {
      return (
        <ExhibitionBox
          src={ "#joanna" }
          position={ "2 2.1 -2"}
          rotation={"0 -50 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          sound="on: click; src: #ada-audio"
        />)
    }
    else {
      console.log("else case")
    }
  }

  render() {
    console.log("first room rendered");
    return (
      <Entity>
        <LightSwitch
          position={"-0.5 0.974 -2.110"}
          scale={"0.2 0.2 0.2"}
          person={"ada"}
          store={ this.store } />

        { this.renderAda() }

        <LightSwitch
          position={"0 0.974 -2.110"}
          scale={"0.2 0.2 0.2"}
          person={"grace"}
          store={ this.store } />

        { this.renderPortrait(this.store.getState().graceElementVisible,
                              "#gracePortrait",
                              "0 2.1 -2.3",
                              "0 0 0",
                              "1.3 1.65 0") }

        <LightSwitch
          position={"0.5 0.974 -2.110"}
          scale={"0.2 0.2 0.2"}
          person={"joanna"}
          store={ this.store } />

        { this.renderJoanna() }

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -3 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -3"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -3 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -3"}
          scale={"0.5 0.5 1"}
          destination="secondRoom"
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    graceElementVisible: state.graceElementVisible,
    adaElementVisible: state.adaElementVisible,
    joannaElementVisible: state.joannaElementVisible
  }
}

const firstRoom = connect( mapStateToProps )(FirstRoom)

export default firstRoom;
