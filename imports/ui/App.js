import React, { Component } from 'react';

import PlayerList from "./PlayerList";
import AddPlayer from './AddPlayer';
import TitleBar from './TitleBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keep" />
        <div className="wrapper">
          <PlayerList />
          <AddPlayer />
        </div>
      </div>
    )
  }
}