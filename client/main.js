import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(<App />, document.getElementById("app"));
  });
});