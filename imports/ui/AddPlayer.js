import React, {Component} from 'react';

import { Players } from '../api/players';


export default class AddPlayer extends Component {
  handleSubmit(event) {
    if(event) {
      event.preventDefault();
    }
    const playerName = this.refs.playerName.value.trim();
    if(playerName && playerName.length) {
      this.refs.playerName.value = "";
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" ref="playerName" type="text" placeholder="Player name" />
          <button className="button" type="submit">Add Player</button>
        </form>
      </div>
    )
  }
};
