import { useContext, useState, useEffect } from 'react';
import { IconSearch } from '@components/Icons';
import { CurrentKeywordContext } from '@/context';
import type { TypeCurrentKeywordContext } from '@/context/currentKeywordContext';

type FunctionOnEnter = (keyword: string) => void;

const SearchInput = ({ onEnter }: { onEnter: FunctionOnEnter }) => {
  const { currentKeyword } = useContext(
    CurrentKeywordContext
  ) as TypeCurrentKeywordContext;

  const [keyword, setKeyword] = useState('');
  const [isKeywordEmpty, setIsKeywordEmpty] = useState(false);

  useEffect(() => {
    setKeyword(currentKeyword);
  }, [currentKeyword]);

  const handleInput = (event: React.FormEvent) => {
    setKeyword((event.target as HTMLInputElement).value);
    setIsKeywordEmpty(false);
  };
  const handleHitEnter = (event: React.KeyboardEvent) => {
    // TODO: validate keyword
    if (event.key === 'Enter') {
      if (keyword.trim().length === 0) {
        setIsKeywordEmpty(true);
      } else {
        setIsKeywordEmpty(false);
        onEnter(keyword);
      }
    }
  };

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
      }}
    >
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
          border: isKeywordEmpty ? `1px solid ${theme.colors.red}` : 'unset',
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
          placeholder='Search for any word...'
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
      {isKeywordEmpty && (
        <div
          css={(theme) => ({
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: '0',
            color: theme.colors.red,
          })}
        >
          Whoops, can’t be empty…
        </div>
      )}
    </div>
  );
};

function SearchBar() {
  const { handleSearch } = useContext(
    CurrentKeywordContext
  ) as TypeCurrentKeywordContext;
  return (
    <section
      css={{
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SearchInput
        onEnter={(keyword: string) => handleSearch(keyword)}
      ></SearchInput>
    </section>
  );
}

export default SearchBar;
