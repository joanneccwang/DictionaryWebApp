import { FontFamily } from '@/types/font';
import { createContext } from 'react';

type TypeCurrentFontContext = {
  currentFont: FontFamily;
  changeCurrentFont: (font: FontFamily) => void;
};

const CurrentFontContext = createContext<TypeCurrentFontContext | null>(null);

export type { TypeCurrentFontContext };
export { CurrentFontContext };
