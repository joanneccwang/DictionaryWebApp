import { useContext } from 'react';
import { CurrentKeywordContext } from '@/context';
import type { TypeCurrentKeywordContext } from '@/context/currentKeywordContext';

import type {
  Definition,
  VocabDefinition as VocabDefinitionType,
} from '@/types/vocabulary';

import Line from '@components/Line';

const PartOfSpeech = ({ pos }: { pos: string }) => {
  return (
    <div
      css={{
        margin: '40px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <h3
        css={{
          flex: '0 0 auto',
          marginRight: '20px',
        }}
      >
        {pos}
      </h3>
      <Line></Line>
    </div>
  );
};
const SynOrAnt = ({ title, words }: { title: string; words: string[] }) => {
  const { handleSearch } = useContext(
    CurrentKeywordContext
  ) as TypeCurrentKeywordContext;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <h4 css={{ marginRight: '20px' }}>{title}</h4>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {words.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            css={(theme) => ({
              display: 'inline-flex',
              color: theme.colors.purple,
              fontWeight: '700',
              cursor: 'pointer',
              marginRight: '8px',
              '&:hover': {
                textDecoration: 'underline',
              },
            })}
            onClick={() => handleSearch(word)}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

const DefinitionList = ({ list }: { list: Definition[] }) => {
  return (
    <div>
      <h4>Meaning</h4>
      <ul
        css={() => ({
          listStyleType: 'disc',
        })}
      >
        {list.map((definition) => (
          <li
            key={definition.definition}
            css={(theme) => ({
              '&::marker': {
                color: theme.colors.purple,
              },
              marginBottom: '13px',
            })}
          >
            {definition.definition}
            {definition?.example && (
              <div
                css={(theme) => ({
                  color: theme.colors.gray75,
                  marginTop: '13px',
                })}
              >
                {definition.example}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

function VocabDefinition({ definition }: { definition: VocabDefinitionType }) {
  return (
    <section css={{ display: 'flex', flexDirection: 'column' }}>
      <PartOfSpeech pos={definition.partOfSpeech}></PartOfSpeech>
      <DefinitionList list={definition.definitions}></DefinitionList>

      <div
        css={{
          marginTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        {definition.synonyms && definition.synonyms.length > 0 && (
          <SynOrAnt title='Synonym' words={definition.synonyms}></SynOrAnt>
        )}
        {definition.antonyms && definition.antonyms.length > 0 && (
          <SynOrAnt title='Antonym' words={definition.antonyms}></SynOrAnt>
        )}
      </div>
    </section>
  );
}

export default VocabDefinition;
