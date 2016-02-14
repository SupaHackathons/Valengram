import React, { Component, PropTypes } from 'react';
const {string, number} = PropTypes;

export default class ScrollItem extends Component {

  static propTypes = {
    source: string,
    text: string,
    idx: number
  };

  render () {
    const {idx, source, text} = this.props;
    // let isFrozen = this.isFrozen();

    return (
      <div key={idx}>
        <div className='valenTextWrapper'>
          <span className='valenText'>{text}</span>
        </div>
        <img src={source} className='valenImages'/>
      </div>
    );
  }

}
