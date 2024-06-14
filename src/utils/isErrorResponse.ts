import { APIError } from '@/api/typing';
import { ERROR_NOT_FOUND, ERROR_UNKNOWN } from './constants';

const isErrorResponse = (responseObj: unknown): responseObj is APIError => {
  if (typeof responseObj !== 'object') return false;
  if (responseObj === null) return false;

  if ('status' in responseObj && typeof responseObj.status === 'number') {
    return [ERROR_NOT_FOUND, ERROR_UNKNOWN].includes(responseObj.status);
  }

  return false;
};

export default isErrorResponse;
