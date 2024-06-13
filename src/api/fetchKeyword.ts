import type { Vocab } from '@/types/vocabulary';
import type { APIFetchKeywordResponse } from './typing';
async function fetchKeyword(params: {
  keyword: string;
}): Promise<Vocab | undefined> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${params.keyword}`;
  try {
    const dataList: APIFetchKeywordResponse = await fetch(url, {
      method: 'GET',
    }).then((response) => response.json());

    const data = dataList[0]; // to simplify, only take the first result
    const parsed: Vocab = {
      vocab: data.word,
      phonetic: data.phonetics.find((p) => p.text !== undefined), // to simplify, only take the first result
      partOfSpeechs: data.meanings,
      sourceUrls: data.sourceUrls,
    };
    return parsed;
  } catch (error) {
    // TODO: if 404 => word not found
    console.error({ error });
    throw new Error('Fetch Keyword Error');
  }
}

export { fetchKeyword };
