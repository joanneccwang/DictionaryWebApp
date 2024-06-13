import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SearchResult from '@components/SearchResult';

function App() {
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
        <SearchBar></SearchBar>
        <SearchResult></SearchResult>
      </div>
    </main>
  );
}

export default App;
