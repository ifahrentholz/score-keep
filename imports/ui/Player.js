import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Players} from "../api/players";

export default class Player extends Component {
  handleDeletePlayer(event, player) {
    event.preventDefault();
    Players.remove(player._id);
  }

  handleIncrement(event, player) {
    event.preventDefault();
    Players.update(player._id, {
      $inc:  {score: 1}
    });
  }

  handleDecrement(event, player) {
    event.preventDefault();
    Players.update(player._id, {
      $inc:  {score: -1}
    });
  }

  render() {
    const player = this.props.player;
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div key={player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">
              {player.position} place - {player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => this.handleIncrement(event, player)}>+</button>
            <button className="button button--round" onClick={() => this.handleDecrement(event, player)}>-</button>
            <button className="button button--round" onClick={() => this.handleDeletePlayer(event, player)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}


Player.propTypes = {
  player: PropTypes.object.isRequired,
}