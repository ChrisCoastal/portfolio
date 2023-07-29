import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "Rainbeau is a color theming tool that takes inspiration from real world imagery. Users cycle through randomized photos, fetched from Unsplash, to create unique color palettes that are drawn from 'color markers' they place on the image. Markers can be dragged, added, renamed, and deleted by the user to update their palette swatches. The palettes are formatted to be easily copied and used with common styling libraries like Tailwind, MUI, or Styled Components.",
  ],
  upperBody: [
    'I decided to build Rainbeau as an exercise to gain a more thorough understanding of the versatility of <canvas> and the Canvas API. I was already doing some work with canvas using Three.js, but wanted to learn about the native API rather than only working with abstractions over it. ',
    "Rainbeau uses Javascript's native Fetch API to get the Unsplash key from a backend and then requests images. The images are then rendered to an html <canvas> element using the Canvas API. Reading from the Canvas context's getImageData() method, the app reads the value of each pixel, mapping colors to the UI in response to user mouse actions.",
  ],
  lowerBody: [
    "Rainbeau also features secure handling of secrets with Cloud Functions and Google Secrets Manager and Firebase. The client app state is created with React's useReducer and includes recent move history to give users undo and redo capability. Because the canvas is responsive, the history includes the current canvas size so that marker positions can be recalculated to the current canvas size if there has been a change to the window size between history states.",
    'The roadmap (one day) for future features includes adding auth, saving and sharing palettes between users, and the ability to upload images for local use.',
  ],
};
