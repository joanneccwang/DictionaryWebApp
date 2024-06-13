import type { Vocab } from '@/types/vocabulary';
import VocabHeader from './VocabHeader';
import VocabDefinition from './VocabDefinition';

function SearchResult() {
  const test: Vocab = {
    vocab: 'Keyword',
    phonetic: 'keyworddddd',

    partOfSpeechs: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              '(etc.) A set of keys used to operate a typewriter, computer etc.',
          },
          {
            definition:
              'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
          },
        ],
        synonyms: ['electronic keyboard'],
        antonyms: ['heeyyyy'],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'To type on a computer keyboard.',
            example: '“Keyboarding is the part of this job I hate the most.”',
          },
        ],
      },
    ],

    sourceUrls: ['https://en.wiktionary.org/wiki/keyword'],
  };

  return (
    <section>
      <VocabHeader vocab={test}></VocabHeader>
      {test.partOfSpeechs.map((definition) => (
        <VocabDefinition definition={definition}></VocabDefinition>
      ))}
    </section>
  );
}

export default SearchResult;
