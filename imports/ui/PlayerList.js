import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import { Players, CalculatePlayerPositions } from "../api/players";
import Player from "../ui/Player";

export default class PlayerList extends Component {
  renderPlayers(players) {
    return players.map((player) => {
      return (
        <Player key={player._id} player={player} />
      );
    });
  }

  render() {
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const positionedPlayers = CalculatePlayerPositions(players);

    if(!positionedPlayers.length) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      )
    } else {
      return (
        <div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderPlayers(positionedPlayers)}
          </FlipMove>
        </div>
      )
    }
  }
}