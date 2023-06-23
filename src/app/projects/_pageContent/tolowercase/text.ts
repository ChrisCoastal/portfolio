import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    'Taking letters to lowercase one character at a time! Built to help a friend that constantly has to convert strings to lowercase characters for work, tolowercase is a limited-frills text conversion and validation app. It gives users a text input field and outputs modified and/or validated text based on selected menu options.',
  ],
  upperBody: [
    "The app UI is assembled with MUI Joy components additionally styled and animated with Emotion. There is a global state provided by React's useReducer and createContext API. The app also checks the client’s dark/light mode preference to initially render the default when the page is first visited. Any change to the user selected mode is written to local storage to persist after refresh or navigation.",
  ],
  lowerBody: [
    'In addition to using the namesake Javascript tolowercase() method, the app gives options for validating string length, replacing URI unsafe characters, and uses regex and the codePointAt() string method to check for some sneaky, uncommon characters.',
  ],
};
