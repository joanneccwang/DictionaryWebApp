import { useState, useEffect } from 'react';
import type { Vocab } from '@/types/vocabulary';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SearchResult from '@components/SearchResult';

import { fetchKeyword } from '@/api/fetchKeyword';
import { CurrentKeywordContext, CurrentFontContext } from './context';
import isErrorResponse from './utils/isErrorResponse';
import ErrorBlock from './components/ErrorBlock';

import MyThemeProvider from './MyThemeProvider';
import { FontFamily } from './types/font';

function App() {
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [currentFont, setCurrentFont] = useState(FontFamily.SansSerif);

  const [vocabDef, setVocabDef] = useState<Vocab | null>();
  const [errorMsg, setErrorMsg] = useState<
    | {
        isError: true;
        errorObj: {
          title: string;
          message: string;
        };
      }
    | { isError: false | null }
  >({
    isError: null,
  });

  const handleSearch = (searchWord: string) => {
    setCurrentKeyword(searchWord);
  };
  const getVocabDefinition = async (keyword: string) => {
    try {
      const params = { keyword: keyword };
      const vocab = await fetchKeyword(params);
      if (isErrorResponse(vocab)) {
        setErrorMsg({
          isError: true,
          errorObj: { title: vocab.title, message: vocab.message },
        });
      } else {
        setErrorMsg({ isError: false });
        setVocabDef(vocab);
      }
    } catch (error) {
      // TODO: handle Error
    }
  };

  useEffect(() => {
    if (currentKeyword === '') return;
    getVocabDefinition(currentKeyword);
  }, [currentKeyword]);

  return (
    <MyThemeProvider>
      <CurrentFontContext.Provider
        value={{ currentFont, changeCurrentFont: setCurrentFont }}
      >
        <CurrentKeywordContext.Provider
          value={{ currentKeyword, handleSearch }}
        >
          <main
            css={(theme) => ({
              maxWidth: '736px',
              margin: '0 auto',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: `${currentFont}, ${theme.fontFamily}`,
            })}
          >
            <div css={{ padding: '50px 0px' }}>
              <Header></Header>
              <SearchBar></SearchBar>
              {errorMsg.isError === true ? (
                <ErrorBlock error={errorMsg.errorObj}></ErrorBlock>
              ) : (
                vocabDef && <SearchResult vocab={vocabDef}></SearchResult>
              )}
            </div>
          </main>
        </CurrentKeywordContext.Provider>
      </CurrentFontContext.Provider>
    </MyThemeProvider>
  );
}

export default App;
