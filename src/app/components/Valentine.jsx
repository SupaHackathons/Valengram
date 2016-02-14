import React, { Component, PropTypes } from 'react';
const {array, shape} = PropTypes;

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

  _mkValImage = (source, idx) => {
    const { text } = this.props.valData;
    return (
      <ScrollItem source={source}
                  text={text[idx]}
                  key={idx}
                  idx={idx}/>
    );
  };

  render () {
    const { valData } = this.props;
    return (
      <div>
        <h1>here's your Valengram!</h1>
        {valData.files.map(this._mkValImage)}
      </div>
    );
  }
}
