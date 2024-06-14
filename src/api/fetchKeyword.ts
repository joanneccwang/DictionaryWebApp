import type { Vocab } from '@/types/vocabulary';
import type { APIFetchKeywordResponse, APIError } from './typing';
import { ERROR_NOT_FOUND } from '@/utils/constants';

async function fetchKeyword(params: {
  keyword: string;
}): Promise<Vocab | APIError | undefined> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${params.keyword}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (response.status === ERROR_NOT_FOUND) {
      const errorObj = await response.json();
      return {
        status: response.status,
        title: errorObj.title,
        message: `${errorObj.message} ${errorObj.resolution}`,
      };
    }

    const dataList: APIFetchKeywordResponse = await response.json();
    const data = dataList[0]; // to simplify, only take the first result
    const parsed: Vocab = {
      vocab: data.word,
      phonetic: data.phonetics.find((p) => p.text !== undefined), // to simplify, only take the first result
      partOfSpeechs: data.meanings,
      sourceUrls: data.sourceUrls,
    };
    return parsed;
  } catch (error) {
    console.error({ error });
    return {
      status: 0,
      title: 'Woops',
      message: 'Something Wrong',
    };
  }
}

export { fetchKeyword };
