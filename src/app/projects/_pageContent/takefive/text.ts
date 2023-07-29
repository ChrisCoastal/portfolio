import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    'Take Five is a library for handling the card playing, scoring, and player turn logic for the card game of the same name, aka Kaiser or Troika. Take Five (the 5 of Hearts is the key card) is a little known trick-based game that plays similar to Spades, Whist, Euchre, etc. that has very localized popularity in Eastern Europe and the Canada prairies. One of these pockets of popularity happens to be where a close friend/mentor/project collaborator, Paul, and I grew up together and played it avidly with friends in school.',
  ],
  upperBody: [
    'The Take Five library is framework agnostic, as the intention was for it to be consumed by both the front and back end of the app. This offered me the opportunity to write it using a class-based approach - whereas most of the time I find myself writing functional React components - in Typescript. I wrote the unit and integration testing for the library using Jest.',
  ],
  lowerBody: [
    'Paul flushed out a Graph QL schema for the database API. I built a simple, proof of concept UI consuming the library using React, Next, AWS Cognito/Amplify for user auth, and fetching from the Graph QL endpoints through Apollo. Both Paul and I had to move onto other projects before translating this into a finished app, but it was a great experience collaborating with a friend, and the library is available as an NPM package waiting for us or another passionate Take Five player to come back to it.',
  ],
};
