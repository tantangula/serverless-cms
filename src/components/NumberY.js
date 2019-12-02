import React, { PureComponent } from 'react';

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
        <div id="yellow-square" onClick={getNumber}>
        </div>
      </div>
    );
  }
}
