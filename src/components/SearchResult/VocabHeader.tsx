import type { Vocab } from '@/types/vocabulary';

function VocabHeader({ vocab }: { vocab: Vocab }) {
  return (
    <div css={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <h1>{vocab.vocab}</h1>
        {vocab.phonetic && (
          <div
            css={(theme) => ({ color: theme.colors.purple, marginTop: '8px' })}
          >
            {`${vocab.phonetic.text}`}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default VocabHeader;
