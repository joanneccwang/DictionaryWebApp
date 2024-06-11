import type { Vocab } from '@/types/vocabulary';
import VocabHeader from './VocabHeader';
import VocabMeaning from './VocabMeaning';

function SearchResult() {
  const test: Vocab = {
    vocab: 'Keyword',
    kk: 'keyworddddd',

    partOfSpeechs: [
      {
        pos: 'noun',
        synonyms: ['electronic keyboard'],
        meanings: [
          {
            meaning:
              '(etc.) A set of keys used to operate a typewriter, computer etc.',
          },
          {
            meaning:
              'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
          },
        ],
      },
      {
        pos: 'verb',
        meanings: [
          {
            meaning: 'To type on a computer keyboard.',
            example: '“Keyboarding is the part of this job I hate the most.”',
          },
        ],
      },
    ],
  };

  return (
    <section>
      <VocabHeader vocab={test}></VocabHeader>
      {test.partOfSpeechs.map((meaning) => (
        <VocabMeaning meaning={meaning}></VocabMeaning>
      ))}
    </section>
  );
}

export default SearchResult;
