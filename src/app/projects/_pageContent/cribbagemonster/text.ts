import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    'Cribbage Monster is a multiplayer online version of the classic card game. The multi-page app is built with React and uses React Router for routing, Google Firestore for auth, and Firebase Realtime Database for backend storage/updating subscribed clients via websocket.',
  ],
  upperBody: [
    'Firebase Realtime Database provides a very friendly and easy to use API to connect clients via web socket. Clients are subscribed at login to see all active games, which are viewable from the app dashboard. Upon joining a game, the database is updated to give the auth user access to the game data. This logic is provided by a JSON ruleset written in the Firebase console.',
    'The UI for Cribbage Monster is styled with Tailwind in combination with Sass and Anime.js to animate SVG and HTML elements. As Tailwind can be particularly verbose for animations, transform rules, and even just conditional styling (compared to a CSS-in-JS lib or Sass), I wanted to use this project to explore both where one approach might be preferable to another and how they can work together. Having the three libraries expectedly made for a  jumble at times - certainly not the most maintainable or readable - but that was expected. I enjoy the ease of use and consistency that Tailwind can provide; however, my conclusion is that most applications with anything more than basic animations are better off being styled with well planned out Sass or CSS-in-JS.',
  ],
  lowerBody: [
    'Other notable parts of the app include writing secure Realtime Database rulesets to manage reads/writes, auth protected routes built with Firestore and React Router, Google Cloud Functions used to clean up old games, and a cribbage board UI drawn with Tailwind and making good semantic use of <ul> and <li> elements.',
  ],
};
