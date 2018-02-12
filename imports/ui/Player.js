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
    return (
      <tr key={player._id}>
        <td>
          {player.score}
        </td>
        <td>
          {player.name}
        </td>
        <td>
          <button onClick={() => this.handleIncrement(event, player)}>
            +
          </button>
        </td>
        <td>
          <button onClick={() => this.handleDecrement(event, player)}>
            -
          </button>
        </td>
        <td>
          <button onClick={() => this.handleDeletePlayer(event, player)} className="removePlayer">
            Delete
          </button>
        </td>
      </tr>
    )
  }
}


Player.propTypes = {
  player: PropTypes.object.isRequired,
}