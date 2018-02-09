import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { FeedData } from '../imports/collections/data';
import { renderRoutes }  from '../imports/Routes.js';



Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('main'));
});