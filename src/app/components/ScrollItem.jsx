import React, { Component, PropTypes } from 'react';
const {string, number} = PropTypes;
import classnames from 'classnames';
import styles from './ScrollItem.css';

// var SCROLL_TIMEOUT = 240;
// var CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

export default class ScrollItem extends Component {
  // componentDidMount () {
  //   this.node = findDOMNode();
  //   this.updateTopPosition();
  // }

  static propTypes = {
    source: string,
    text: string,
    idx: number
  };
  //
  // state = {
  //   top: 1,
  //   height: -1,
  //   scrolling: false
  // };
  // checkInterval = null;
  // scrolling = false;
  // proxiedScrollTime = Date.now();
  //
  // checkScroll = () => {
  //   if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
  //     this.scrolling = false;
  //     this.onScrollEnd();
  //   }
  // };
  //
  // proxiedScroll = () => {
  //   if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
  //     this.proxiedScrollTime = Date.now();
  //     this.onScrollProxy();
  //   }
  // };
  //
  // onScroll = () => {
  //   if (!this.scrolling) {
  //     this.scrolling = true;
  //     this.onScrollStart();
  //   }
  //   this.lastScrollTime = Date.now();
  //   this.proxiedScroll();
  // };
  //
  // handleScroll = () => {
  //   this.updateTopPosition();
  // };
  //
  // updateTopPosition = () => {
  //   var box = this.node.getBoundingClientRect();
  //   this.setState({
  //     top: box.top,
  //     height: box.height
  //   });
  // };
  //
  // onScrollStart = () => {
  //   this.setState({scrolling: true});
  //   this.handleScroll();
  // };
  //
  // onScrollProxy = () => {
  //   this.handleScroll();
  // };
  //
  // onScrollEnd = () => {
  //   this.setState({scrolling: false});
  //   this.handleScroll();
  // };
  //
  // getState = () => {
  //   return this.state;
  // };
  //
  // isFrozen = () => {
  //   return this.state.top < 1 && this.state.top < window.document.body.scrollTop;
  // };

  render () {
    const {idx, source, text} = this.props;
    // let isFrozen = this.isFrozen();

    const argsClass = classnames({
      [styles.sticky]: true,
      [styles.frozen]: false
    });
    const imgStyle = {
      // height: isFrozen ? this.state.height : 'auto',
      zIndex: idx
    };

    return (
      <div key={idx}
           className={argsClass}
           style={imgStyle}>
        <div className={styles.textWrapper}>
          <span className={styles.text}>{text}</span>
        </div>
        <img src={source} className={styles.images}/>
      </div>
    );
  }

}
