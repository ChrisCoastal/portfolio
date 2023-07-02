import { ProjectText } from '@/@types/types';

export const text: ProjectText = {
  lede: [
    "This was a small mockup / UI tweak for Studio A, a Vancouver based product/brand design firm led by Jamie Anderson. With a pre-existing site built on Squarespace 7.0, Jaime had designed some minor layout changes and a new landing page that wasn't possible with the Squarespace CMS.",
    "Though I've built a few Squarespace sites over the years, Squarespace isn't really in my wheelhouse or focus, so this was a unique chance to dive in and learn a bit more about it. While fairly inflexible out of the box, Squarespace 7.0 templates are customizable via a 'Developer Mode' and writing 'JSON-T', Squarespace's in-house templating language. The templating language is very flexible, but with the tradeoff (especially for simple content) that it requires a bit more to do a bit less than plain HTML and CSS.",
  ],
  upperBody: [],
  lowerBody: [
    'For instance, the clean diptych landing page Jamie designed would just need flexbox and a media query with vanilla HTML / CSS, but took a bit more to integrate into the Squarespace template.',
    "The end result, building on top of the existing theme Studio A was using, replicated the design brief and added functionality to the CMS so that the new landing page's content could be easily edited by the Studio A team moving forward. The small updates to page layouts I made are live while the landing page waits for Jamie to launch the ‘studio work’ section of her site.",
  ],
};
