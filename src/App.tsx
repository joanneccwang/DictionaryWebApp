import { useState, useEffect } from 'react';
import type { Vocab } from '@/types/vocabulary';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SearchResult from '@components/SearchResult';

import { fetchKeyword } from '@/api/fetchKeyword';

function App() {
  const [keyword, setKeyword] = useState('');
  const [vocabDef, setVocabDef] = useState<Vocab | null>();

  const handleSearch = (searchWord: string) => {
    setKeyword(searchWord);
  };
  const getVocabDefinition = async (keyword: string) => {
    try {
      const params = { keyword: keyword };
      const vocab = await fetchKeyword(params);
      setVocabDef(vocab);
    } catch (error) {
      // TODO: handle Error
    }
  };
  useEffect(() => {
    if (keyword === '') return;
    getVocabDefinition(keyword);
  }, [keyword]);

  return (
    <main
      css={{
        maxWidth: '736px',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div css={{ padding: '50px 0px' }}>
        <Header></Header>
        <SearchBar onSearch={handleSearch}></SearchBar>
        {vocabDef && <SearchResult vocab={vocabDef}></SearchResult>}
      </div>
    </main>
  );
}

export default App;
