export interface Definition {
  definition: string;
  example?: string;
}

export interface VocabDefinition {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface Vocab {
  vocab: string;
  phonetic: string;
  partOfSpeechs: VocabDefinition[];
  sourceUrls: string[];
}
