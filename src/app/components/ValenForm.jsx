import React, { Component, PropTypes } from 'react';
const { func } = PropTypes;
import Image from './image';
import map from 'lodash/collection/map';
import DropZone from 'react-dropzone';
import { Input } from 'react-bootstrap';

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
      <div className='valForm'>
        <h1>Make a Valengram!</h1>
        <DropZone onDrop={this.onDrop}>
          <div>Drop A Photo of your Valentine into here</div>
        </DropZone>

        {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div className='valImageContainer'>
            {this.state.files.map((file, idx) =>
              <Image img={file.preview} key={idx} />)}
            </div>
        </div>
          : <div>Waiting for file</div>}

        <form onSubmit={this.onClick}>
          <Input type='textarea'
                 className='questionInput'
                 placeholder="What is your valentine's name/nickname?" />
          <Input type='textarea'
                 className='questionInput'
                 placeholder='Where did you first meet?' />
          <Input type='textarea'
                 className='questionInput'
                 placeholder='"I love how you..."' />
          <button type='submit' value='submit'>Submit! </button>
        </form>
      </div>
    );
  }
}
