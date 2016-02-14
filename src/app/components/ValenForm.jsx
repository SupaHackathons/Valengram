import React, { Component, PropTypes } from 'react';
const { func } = PropTypes;
import Image from './image';
import map from 'lodash/collection/map';
import styles from '../styles/Valengram.css';
import DropZone from 'react-dropzone';
import { Input, ButtonToolbar, Button } from 'react-bootstrap';

export default class ValenForm extends Component {

  static propTypes = {
    onFormSubmit: func
  };

  state = {
    files: [],
    text: []
  };

  onClick = (e) => {
    e.preventDefault();
    let text = [];
    map(e.target.getElementsByTagName('input'), (input) => {
      text.push(input.value);
    });
    const submitData = {
      files: this.state.files,
      text: text
    };
    this.props.onFormSubmit(submitData);
    console.log('VALFORM STATE', this.state);
    this.props.history.push('/valentine/');
  };

  onDrop = (file) => {
    this.setState(function (prevState, currProps) {
      return { files: prevState.files.concat(file) };
    });
  };

  render () {
    return (
      <div style={{'backgroundImage': 'url(./valForm.jpg)'}} className={styles.valForm}>
        <h1>Make a Valengram!</h1>
        <DropZone onDrop={this.onDrop}>
          <div>Drop A Photo of your Valentine into here</div>
        </DropZone>

        {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div className={styles.valImageContainer}>{this.state.files.map((file, idx) => <Image img={file.preview} key={idx} />)}</div>
        </div>
          : <div>Waiting for file</div>}

<<<<<<< Updated upstream
        <form onSubmit={this.onClick}>
          <input type='text'
                 className={styles.questionInput}
                 placeholder="What is your valentine's name/nickname?" />
          <input type='text'
                 className={styles.questionInput}
                 placeholder='Where did you first meet?' />
          <input type='text'
                 className={styles.questionInput}
                 placeholder='"I love how you..."' />
          <button type='submit' value='submit'>Submit! </button>
=======
        <form>
          <Input type='textarea' onChange={this.handleName} className={styles.questionInput}
            placeholder="What is your valentine's name/nickname?" />
          <Input type='textarea' onChange={this.handlePlace} className={styles.questionInput}
            placeholder='Where did you first meet?' />
          <Input type='textarea' onChange={this.handleLove} className={styles.questionInput}
            placeholder='What do you love most about your valetine' />

          <ButtonToolbar>
            <Button bsStyle='primary' bsSize='large'>Honeycomb?</Button>
          </ButtonToolbar>
>>>>>>> Stashed changes
        </form>
      </div>
    );
  }
}
