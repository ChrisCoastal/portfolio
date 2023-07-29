import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "FocusTrap is an open source contribution I wrote for Flowbite React, a popular UI component library built - and meant to play nice -  with Tailwind. The Flowbite team opened an issue concerning their Modal component not meeting the W3C's Web Accessibility Initiative (WAI) guidelines for how and when focus should be handled. This made it pretty ugly to use, as focus would escape the modal to the rest of the app or client tabs/address bar.",
    "Trapping focus, especially with modal dialog, is a frequently unhandled issue for accessibility on the web, as behaviour is not completely handled by the browser. It's an issue I have faced in my own projects and regrettably not resolved (despite best intentions) as I triaged reasonable features in relation to the scope and purpose of the work. All said, working on this issue for Flowbite felt like a great opportunity to be able to isolate this single UX concern and create a robust, production ready solution.",
  ],
  upperBody: [
    'After researching similar components in comparable libraries (ie: MUI, Radix), I decided that rather than create a component that completely takes over control of all tabindex values on the page, my approach would be to make a FocusTrap component that is light handed - leaving the control to the client whenever possible. This concept follows the rationale that there is less to debug and maintain in the future if more can be handled by the client from the start.',
    'Notably, the component makes use of the lesser used React hook, useInsertionEffect, to help return focus to the previously focussed window element after FocusTrap is unmounted. useInsertionEffect touted for building CSS-in-JS libraries, but here it runs a function to get the currently focussed element from the DOM and store it in an immutable ref value before there is any change or insertion - before FocusTrap in mounted in response to the user action. Neither useEffect and useLayoutEffect can do this as both run after DOM changes.',
  ],
  lowerBody: [
    "To allow devs to override the initially focussed element within the trap, the FocusTrap component checks for the autofocus prop by iterating through its focusable children's props value to check for autoFocus. Though the key of a React component's props is a unique Symbol unknown before runtime, it can be found by matching '__reactProps$' string on a JSX Element's properties. Accounting for this case gives consumers of Flowbite expected results when wanting to change initial focus specific elements within FocusTrap.",
    "In the end, this contribution was not merged into the repo, as the maintainers opted instead to just use Floating UI’s FloatingFocusManager component. Floating UI actually makes similar use of useLayoutEffect for grabbing the previously focussed element - a nice endorsement of my approach. Despite not having my contribution merged, I'm happy to have had the excuse to thoroughly consider how focus can/should be handled in React and will be using the code to meet the WAI guidelines in my own projects.",
  ],
};
