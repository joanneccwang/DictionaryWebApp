import { createContext } from 'react';

export type TypeCurrentKeywordContext = {
  currentKeyword: string;
  handleSearch: (keyword: string) => void;
};

const CurrentKeywordContext = createContext<TypeCurrentKeywordContext | null>(
  null
);

export { CurrentKeywordContext };
