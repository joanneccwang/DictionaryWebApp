import { useState } from 'react';
import { IconSearch } from '@components/Icons';

type FunctionOnEnter = (keyword: string) => void;

const SearchInput = ({ onEnter }: { onEnter: FunctionOnEnter }) => {
  const [keyword, setKeyword] = useState('');

  const handleInput = (event: React.FormEvent) => {
    setKeyword((event.target as HTMLInputElement).value);
  };
  const handleHitEnter = (event: React.KeyboardEvent) => {
    // TODO: validate keyword
    if (event.key === 'Enter') {
      onEnter(keyword);
    }
  };

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '64px',
        padding: '20px 24px',
        backgroundColor: theme.input.bg,
        color: theme.input.color,
        borderRadius: theme.borderRadius,
      })}
    >
      <input
        type='text'
        css={(theme) => ({
          flex: '1',
          width: '100%',
          backgroundColor: theme.input.bg,
          color: theme.input.color,
          fontFamily: theme.fontFamily,
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
        })}
        value={keyword}
        onInput={handleInput}
        onKeyDown={handleHitEnter}
      />
      <div
        css={{
          flex: '0 0 auto',
          marginLeft: '24px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

function SearchBar({ onSearch }: { onSearch: (keyword: string) => void }) {
  return (
    <section
      css={{
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SearchInput
        onEnter={(keyword: string) => onSearch(keyword)}
      ></SearchInput>
    </section>
  );
}

export default SearchBar;
