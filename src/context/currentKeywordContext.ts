import { createContext } from 'react';

type TypeCurrentKeywordContext = {
  currentKeyword: string;
  handleSearch: (keyword: string) => void;
};

const CurrentKeywordContext = createContext<TypeCurrentKeywordContext | null>(
  null
);

export type { TypeCurrentKeywordContext };
export { CurrentKeywordContext };
