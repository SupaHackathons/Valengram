import React, { Component, PropTypes } from 'react';
const { func } = PropTypes;
import Image from './image';
import map from 'lodash/collection/map';
import styles from '../styles/Valengram.css';
import DropZone from 'react-dropzone';

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
      console.log('previous state files', prevState.files);
      return { files: prevState.files.concat(file) };
    });
  };

  render () {
    return (
      <div>
        <h1>Make a Valengram!</h1>
        <DropZone onDrop={this.onDrop}>
          <div>Drop A Photo of your Valentine into here</div>
        </DropZone>

        {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div className={styles.valImageContainer}>{this.state.files.map((file, idx) => <Image img={file.preview} key={idx} />)}</div>
        </div>
          : <div>Waiting for file</div>}

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
        </form>
      </div>
    );
  }
}
