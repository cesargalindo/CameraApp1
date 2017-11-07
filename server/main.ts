import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';

import './imports/slingshot/slingshot.init';

import './imports/publications/parties';
import './imports/publications/users';
import '../both/methods/parties.methods';

Meteor.startup(() => {
  loadParties();
});
