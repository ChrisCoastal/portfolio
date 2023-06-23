import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "Take Five is a library for handling the card playing logic for the card game of the same name (AKA Kaiser and Troika). It's a little known trick-based game (similar to Spades, Whist, Euchre, etc.) with localized popularity in Eastern Europe and Canada (including where I grew up).",
  ],
  upperBody: [
    'The package is framework agnostic, which offered me the opportunity to write it using a class-based approach (I have mostly been writing functional React components). I made use of the Fisher-Yates Shuffle algorithm for card randomizing and Jest is used for unit / integration testing.',
  ],
  lowerBody: [
    'I built a simple, proof of concept UI consuming the library using React and AWS Cognito and Amplify for auth.',
  ],
};
