import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties() {
  if (Parties.find().cursor.count() === 0) {
    const parties: Party[] = [{
      name: 'Dubstep-Free Zone',
      description: 'Can we please just for an evening not listen to dubstep.',
      location: {
        name: 'Modesto, CA'
      },
      public: true
    }, {
      name: 'All dubstep all the time',
      description: 'Get it on!',
      location: {
        name: 'Modesto, CA'
      },
      public: true
    }, {
      name: 'Mix-a-lot Party for all',
      description: 'Bring your own food',
      location: {
        name: 'Modesto, CA'
      },
      public: false
    }, {
      name: 'Party downtown for a select few',
      description: 'Bring your cover charge, nothing is free',
      location: {
        name: 'Modesto, CA'
      },
      public: true
    }, {
      name: 'Gathering around the lake.',
      description: 'Clean up your mess, otherwise you will be fined',
      location: {
        name: 'Lodi, CA'
      },
      public: true
    }, {
      name: 'Savage lounging',
      description: 'Leisure suit required. And only fiercest manners.',
      location: {
        name: 'Lodi, CA'
      },
      public: false
    }];

    parties.forEach((party: Party) => Parties.insert(party));
  }
}