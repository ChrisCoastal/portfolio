import { BreakPoint } from '@/@types/types';

export const breakPoints: Record<BreakPoint, number> = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const heroTextWidth = 80;
export const heroTextRatio = { landscape: 0.5, portrait: 0.877777 };
export const svgScale = {
  portrait: { x: 0.8, y: 0.77 },
  landscape: { x: 1, y: 1 },
};
