import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "Rainbeau is a color theming tool that takes inspiration from real world imagery. Users cycle through randomized photos (fetched from Unsplash) to create unique color palettes that are read from 'color markers' placed in the image. Markers can be dragged, added, and deleted by the user to update the palette swatches. ",
  ],
  upperBody: [
    'I decided to build Rainbeau as an exercise to gain a more thorough understanding of the power and versatility of <canvas> and the Canvas API. This was a jump off point for working with WebGL and Three.js. The roadmap for future features includes adding auth, saving and sharing palettes between users, and the ability to upload images for local use.',
    "Rainbeau uses Javascript's native Fetch API to get the Unsplash key from a backend and then requests images. The images are then rendered to an html <canvas> element using the Canvas API. Reading from the Canvas context's getImageData() method, the app reads the value of each pixel, mapping colors to the UI in response to user mouse actions.",
  ],
  lowerBody: [
    "User created palettes are formatted to be easily copied and used with common styling libraries like Tailwind, MUI, or Styled Components. Rainbeau also features secure handling of secrets with Cloud Functions and Google Secrets Manager and client app state created with React's useReducer.",
  ],
};
