import type {
  Meaning,
  VocabMeaning as VocabMeaningType,
} from '@/types/vocabulary';
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
      <div
        css={(theme) => ({
          flex: '1',
          height: '1px',
          background: theme.line.bg,
        })}
      ></div>
    </div>
  );
};
const Synonyms = ({ synonyms }: { synonyms: string[] }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '64px',
        alignItems: 'center',
      }}
    >
      <h4 css={{ marginRight: '20px' }}>Synonyms</h4>
      {synonyms.map((syn) => (
        <span
          css={(theme) => ({
            display: 'inline-flex',
            color: theme.colors.purple,
            fontWeight: '700',
            cursor: 'pointer',
          })}
        >
          {syn}
        </span>
      ))}
    </div>
  );
};

const MeaningList = ({ list }: { list: Meaning[] }) => {
  return (
    <div>
      <h4>Meaning</h4>
      <ul
        css={() => ({
          listStyleType: 'disc',
        })}
      >
        {list.map((meaning) => (
          <li
            css={(theme) => ({
              '&::marker': {
                color: theme.colors.purple,
              },
              marginBottom: '13px',
            })}
          >
            {meaning.meaning}
            {meaning?.example && (
              <div
                css={(theme) => ({
                  color: theme.colors.gray75,
                  marginTop: '13px',
                })}
              >
                {meaning.example}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

function VocabMeaning({ meaning }: { meaning: VocabMeaningType }) {
  return (
    <section css={{ display: 'flex', flexDirection: 'column' }}>
      <PartOfSpeech pos={meaning.pos}></PartOfSpeech>
      <MeaningList list={meaning.meanings}></MeaningList>
      {meaning?.synonyms && <Synonyms synonyms={meaning.synonyms}></Synonyms>}
    </section>
  );
}

export default VocabMeaning;
