import React, { Component, PropTypes } from 'react';
const { func } = PropTypes;
import Image from './image';
import styles from '../styles/Valengram.css';
import DropZone from 'react-dropzone';

export default class ValenForm extends Component {

  static propTypes = {
    onFormSubmit: func
  };

  onClick = (e) => {
    this.props.onFormSubmit(this.state);
    console.log('E', e);
    e.preventDefault();
    this.props.history.push('/valentine/');

    console.log('VALFORM STATE', this.state);
  };

  state = {
    files: [],
    text: []
  };

  onDrop = (file) => {
    this.setState(function (prevState, currProps) {
      console.log('previous state files', prevState.files);
      return { files: prevState.files.concat(file) };
    });
  };

  handleName = (event) => {
    this.setState((prevState, currProps) => {
      prevState.text[0] = event.target.value;
      return { text: prevState.text };
    });
  };

  handlePlace = (event) => {
    this.setState((prevState, currProps) => {
      prevState.text[1] = event.target.value;
      return { text: prevState.text };
    });
  };

  handleLove = (event) => {
    this.setState((prevState, currProps) => {
      prevState.text[2] = event.target.value;
      return { text: prevState.text };
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

        <form>
          <input onChange={this.handleName} type='text' className={styles.questionInput}
            placeholder="What is your valentine's name/nickname?" />
          <input onChange={this.handlePlace} type='text' className={styles.questionInput}
            placeholder='Where did you first meet?' />
          <input onChange={this.handleLove} type='text' className={styles.questionInput}
            placeholder='What do you love most about your valetine' />
          <input type='submit' onClick={this.onClick}/>
        </form>
      </div>
    );
  }
}
