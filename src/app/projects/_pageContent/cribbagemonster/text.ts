import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    'Cribbage Monster is a multiplayer online version of the classic card game. The multi-page app is built with React Router and uses Google Firestore and Firebase Realtime Database for auth, backend storage, and updating subscribed clients via websocket.',
  ],
  upperBody: [
    'Anime.js is used in combination with Tailwind to animate SVG and HTML elements. As Tailwind can be particularly verbose for animations and transform rules (compared to a CSS-in-JS lib or even SASS), I wanted to explore where one approach to writing animation might be preferable to another and how they can work together.',
  ],
  lowerBody: [
    'Other notable parts of the app include writing secure Realtime Database rulesets to manage reads/writes, auth protected routes built with Firestore and React Router, Google Cloud Functions used to clean up old games, and a pure CSS cribbage board UI.',
  ],
};
