import { BreakPoint } from '@/@types/types';

export const breakPoints: Record<BreakPoint, number> = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const cols = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
  'col-start-8',
  'col-start-9',
  'col-start-10',
  'col-start-11',
  'col-start-12',
  'col-start-13',
  'col-start-14',
  'col-start-15',
  'col-start-16',
];

export const rows = [
  'row-start-1',
  'row-start-2',
  'row-start-3',
  'row-start-4',
  'row-start-5',
  'row-start-6',
  'row-start-7',
  'row-start-8',
];

export const heroTextWidth = 80;
export const heroTextRatio = { landscape: 0.5, portrait: 0.877777 };
export const svgScale = {
  portrait: { x: 0.8, y: 0.77 },
  landscape: { x: 1, y: 1 },
};
