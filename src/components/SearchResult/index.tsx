import type { Vocab } from '@/types/vocabulary';
import VocabHeader from './VocabHeader';
import VocabDefinition from './VocabDefinition';
import SourceUrl from './SourceUrl';

function SearchResult({ vocab }: { vocab: Vocab }) {
  return (
    <section>
      <VocabHeader vocab={vocab}></VocabHeader>
      {vocab.partOfSpeechs.map((definition, idx) => (
        <VocabDefinition
          key={`${vocab.vocab}-${idx}`}
          definition={definition}
        ></VocabDefinition>
      ))}
      <SourceUrl urls={vocab.sourceUrls}></SourceUrl>
    </section>
  );
}

export default SearchResult;
