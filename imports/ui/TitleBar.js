import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TitleBar extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  };
}


TitleBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  title: "Your Title",
}