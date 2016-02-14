import React, { Component, PropTypes } from 'react';
const {array, shape} = PropTypes;

import styles from './Valentine.css';
import ScrollItem from './ScrollItem';

export default class Valentine extends Component {

  state = {
    transform: 0
  };

  static propTypes = {
    valData: shape({
      files: array,
      text: array
    })
  };

  static defaultProps = {
    valData: {
      files: [],
      text: []
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    console.log(this.state.transform);
    let scrollTop = event.srcElement.body.scrollTop;
    let itemTranslate = Math.min(0, scrollTop);

    this.setState({
      transform: itemTranslate
    });
  };

  _mkValImage = (file, idx) => {
    const { text } = this.props.valData;
    return (
      <ScrollItem source={file.preview}
                  text={text[idx]}
                  key={idx}
                  idx={idx}/>
    );
  };

  render () {
    const { valData } = this.props;
    return (
      <div>
        <div className={styles.heart}>
          <i className='fa fa-heart-o fa-6'/>
        </div>
        {valData.files.map(this._mkValImage)}
      </div>
    );
  }
}
