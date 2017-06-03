import React from 'react';
import ReactDOM from 'react-dom';

const Chris = React.createClass({
  render(){
    const { jeff } = this.props;
    const compliments = jeff.map((compliment) => {
      return <p key={compliment}>Jeff is {compliment}</p>
    });
    return (
      <div>
        <p>Chris rocks his socks</p>
        { compliments }
      </div>
    )
  }
});

module.exports = Chris;