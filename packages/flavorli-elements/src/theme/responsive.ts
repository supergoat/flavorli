export const COLUMN_WIDTH = 105;

export enum screens {
  XS = COLUMN_WIDTH * 4, // 420
  SM = COLUMN_WIDTH * 7, // 735
  M = COLUMN_WIDTH * 8, // 840
  ML = COLUMN_WIDTH * 10, // 1050
  L = COLUMN_WIDTH * 12, // 1260
}

export const media = {
  XS: `@media (max-width: ${screens.XS}px)`,
  SM: `@media (min-width: ${screens.XS}px) and (max-width: ${screens.SM -
    1}px)`,
  M: `@media (min-width: ${screens.SM}px) and (max-width: ${screens.M - 1}px)`,
  ML: `@media (min-width: ${screens.M}px) and (max-width: ${screens.ML - 1}px)`,
  L: `@media (min-width: ${screens.ML}px) and (max-width: ${screens.L - 1}px)`,
  XL: `@media (min-width: ${screens.L}px)`,
};
