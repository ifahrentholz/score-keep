import React, { Component } from 'react';

import { Players } from "../api/players";
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
    const players = Players.find().fetch();

    if(!players.length) {
      return (
        <h1>
          Add a player to get started.
        </h1>
      )
    } else {
      return (
        <table style={{ marginBottom: "30px" }} cellPadding="5">
          <thead>
            <tr>
              <th>Score</th>
              <th>Name</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPlayers(players)}
          </tbody>
        </table>
      )
    }
  }
}