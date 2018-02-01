import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import UpDownAnimation from './UpDownAnimation';

class HintText extends React.Component {
  constructor(props) {
    super(props);
    this.hint = this.props.hint
  }

  render() {

    const { hint, position, rotation, wrapCount, clickHintAddition } = this.props

    if (clickHintAddition) {
      if (this.props.mode === "cardboard") {
        this.hint = `Fixiere ${clickHintAddition} mit dem Cursor`
      } else if (this.props.mode === "desktop") {
        this.hint = `Bewege den Cursor \n ${clickHintAddition} und klicke!`
      } else {
        this.hint = ""
      }
    }

    return (
      <Entity
        rotation={{x: "0", y: rotation.y, z: "0" }}
        text={{ value: this.hint, align: 'center', wrapCount: wrapCount }}>
         <UpDownAnimation position={{ x: position.x, y: position.y, z: position.z }}/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    mode: state.mode
  }
}

const hintText = connect( mapStateToProps )(HintText)

export default hintText;
