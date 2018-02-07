import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddPlayer from '../imports/ui/AddPlayer';
import TitleBar from '../imports/ui/TitleBar';
import {Players} from '../imports/api/players';


const handleDeletePlayer = (event, player) => {
  event.preventDefault();
  Players.remove(player._id);
}

const handleIncrement = (event, player) => {
  event.preventDefault();
  Players.update(player._id, {
    $inc:  {score: 1}
  });
}

const handleDecrement = (event, player) => {
  event.preventDefault();
  Players.update(player._id, {
    $inc:  {score: -1}
  });
}

const renderPlayers = (players) => {
  return players.map((player) => {
    return (
      <tr key={player._id}>
        <td>
          {player.score}
        </td>
        <td>
          {player.name} 
        </td> 
        <td>
          <button onClick={() => handleIncrement(event, player)}>
            +
          </button>
        </td>
        <td>
          <button onClick={() => handleDecrement(event, player)}>
            -
          </button>
        </td>
        <td>
          <button onClick={() => handleDeletePlayer(event, player)} className="removePlayer">
            Delete
          </button>
        </td>

      </tr>
    );
  });
}

const persistPlayerName = (event) => {
  event.preventDefault();
  const playerName = event.target.playerName.value.trim();
  if(playerName) {
    event.target.playerName.value = "";
    Players.insert({
      name: playerName,
      score: 0
    });
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    let title = "Score Keep"
    let jsx = (
      <div>
        <TitleBar title />
        <table style={{marginBottom: "30px"}} cellPadding="5">
          <thead>
            <tr>
              <th>Score</th>
              <th>Name</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderPlayers(players)}
          </tbody>
        </table>
        <AddPlayer />
        <form onSubmit={persistPlayerName}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});