import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import PlayElement from './PlayElement';
import Lightbulb from './Lightbulb';
import Name from './Name';

class Person extends React.Component {

  constructor(props) {
    super(props)
    this.person = this.props.person
  }

  render() {
    console.log(this.person);
    return (
      <Entity>
        <Lightbulb position={ this.person.lightbulbPosition }/>

        <ExhibitionBox
          id={ this.person.id }
          src={ this.person.picture }
          position={ this.person.position }
          rotation={ this.person.rotation }
        >
          <PlayElement
            soundID={ this.person.sound }
            cursor-listener/>
          <Name name={ this.person.name } />
        </ExhibitionBox >
      </Entity>
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const person = connect( null, mapDispatchToProps )(Person)

export default person;
