import React, { Component } from 'react';

export default class Image extends Component {

  static propTypes = {
    img: React.PropTypes.string
  };

  render () {
    return (
      <div>
        <img className='valImage' src={this.props.img} />
      </div>
    );
  }

}
