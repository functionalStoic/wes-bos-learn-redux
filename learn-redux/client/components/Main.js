import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Jasonduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
