import React, { PureComponent } from 'react';
import styles from '../styles.css.js';
import style from 'to-style';
import { post01 } from '../posts/01.js';
import styled from 'styled-components'

import parse, { domToReact } from 'html-react-parser';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) return;
 
    if (attribs.class === 'button') {
      return (
        <Button>
          {domToReact(children, options)}
        </Button>
      );
    }
  }
};

console.log('post01: ', post01);

export default class Number extends PureComponent {
  
  async componentDidMount() {
    const { getNumber } = this.props;
    getNumber();
  }

  render() {
    const { getNumber, seconds, secondsArray } = this.props;
    console.log('secondsArray: ', secondsArray);
    return (
      <div>
        <Button> Normal Button </Button>
        <h1>
          {seconds}
        </h1>
        {secondsArray.map(({ number }, index) => (
          <h2 key={index}>
          {number}
          </h2>
        ))}
        <div style={styles.blueSquare} onClick={getNumber}>
        </div>
        {parse(post01, options)}
      </div>
    );
  }
}
