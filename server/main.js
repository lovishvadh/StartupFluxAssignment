import { Meteor } from 'meteor/meteor';
import { FeedData } from '../imports/collections/data';

Meteor.startup(() => {
  // code to run on server at startup
  FeedData.insert({
        id: '1',
        at:'hogwarts.com',
        title: 'Gryffindor stands for the bravest',
        src: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg',
        description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
    })
    FeedData.insert(
    {
        id: '2',
        at:'hogwarts.com',
        title: 'Slytherin stands for the cunning',
        src: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557',
        description: 'Or perhaps in Slytherin, You will make your real friends,Those cunning folk use any means,To achieve their ends'
    })
    FeedData.insert(
    {
        id: '3',
        at:'hogwarts.com',
        title: 'Hufflepuff for everyone else',
        src: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518',
        description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
    })
    FeedData.insert(
    {
        id: '4',
        at:'hogwarts.com',
        title: 'Ravenclaw for the smartest',
        src: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442',
        description: 'You might belong in Gryffindor Where dwell the brave at heartTheir daring nerve, and chivalry Set Gryffindors apart'
    })
console.log(FeedData.find().fetch());
});



