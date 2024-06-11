export interface Meaning {
  meaning: string;
  example?: string;
}

export interface VocabMeaning {
  pos: string;
  synonyms?: string[];
  meanings: Meaning[];
}

export interface Vocab {
  vocab: string;
  kk: string;
  partOfSpeechs: VocabMeaning[];
}
