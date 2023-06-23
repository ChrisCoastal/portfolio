import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "FocusTrap is an open source contribution I wrote for Flowbite React, a popular UI component library built with Tailwind. Trapping focus, especially with modal dialog, is a frequently unhandled issue for accessibility on the web, as behaviour is not completely handled by the browser. It's an issue I have faced in my own projects and regrettably not resolved (despite best intentions) as I triaged reasonable features in relation to the scope and purpose of the work. All said, working on this issue for Flowbite felt like a great opportunity to be able to isolate this single UX concern and create a robust, production ready solution.",
  ],
  upperBody: [
    "My implementation of FocusTrap followed W3C's Web Accessibility Initiative (WAI) guidelines for how and when focus should be handled (some of the guidelines are handled natively by clients). After researching similar components in comparable libraries (ie: MUI), I decided that rather than create a component that completely takes over control of ‘tabbing' and ‘tabindex' values, my approach would be to make a FocusTrap component that is light handed - leaving the control to the client whenever possible. This concept follows my rationale that there is less to debug and maintain in the future if more can be handled by the client from the start.",
    'My contribution meets the WAI guidelines and accounts for all of the cases considered. Notably, the component makes use of a seldom used React Hook, useInsertionEffect, to return focus to the previously focussed window element when FocusTrap is unmounted. useInsertionEffect is made for building CSS-in-JS libraries, but here it runs a function to get the currently focussed element from the DOM and store it in an immutable ref value before there is any change or insertion (ie: before FocusTrap in mounted in response to the user action) Neither useEffect and useLayoutEffect cannot do this as both run after DOM changes.',
  ],
  lowerBody: [
    "To check for the autofocus prop, FocusTrap iterates through its focusable children's props value to check for autoFocus. Though the key of a React component's props is a unique Symbol unknown before runtime, it can be found by matching '__reactProps$' string on a JSX Element's properties. Accounting for this case gives consumers of Flowbite expected results when wanting to change initial focus specific elements within FocusTrap.",
    'Flowbite FocusTrap has yet to be merged into the repo, while it waits for another major change to its Modal component being written by another contributor.',
  ],
  lists: [
    {
      intro:
        'This leaves the FocusTrap component needing to override or supplement native behavior in four scenarios:',
      items: [
        'default focus should be initiated to the first focusable child within FocusTrap upon mount (unless specified otherwise)',
        'when the last focusable child of FocusTrap is focussed, focus will loop back to the first focusable child when Tab is pressed',
        'when the first focusable child of FocusTrap is focussed, focus will loop back to the last focusable child when Tab + Shift is pressed',
        'on unmount, FocusTrap will return focus to the element previously focussed prior to FocusTrap being mounted',
      ],
    },
    {
      intro:
        'Additionally, there are a few edge cases that I also wanted to consider:',
      items: [
        'nested focusable children within FocusTrap',
        "a child of FocusTrap has React's autofocus prop passed",
        'children of FocusTrap changing while the trap is active',
      ],
    },
  ],
};
