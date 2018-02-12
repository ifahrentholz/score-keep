import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TitleBar extends Component {
  renderSubtitle() {
    if(this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    )
  };
}


TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

TitleBar.defaultProps = {
  title: "Your Title",
}