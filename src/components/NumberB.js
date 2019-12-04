import React, { PureComponent } from 'react';
import styles from '../styles.css.js';

export default class Number extends PureComponent {
  
  async componentDidMount() {
    const { getNumber } = this.props;
    getNumber();
  }

  render() {
    const { getNumber, seconds } = this.props;
    return (
      <div>
        <h1>
          {seconds}
        </h1>
        <div style={styles.blueSquare} onClick={getNumber}>
        </div>
      </div>
    );
  }
}
