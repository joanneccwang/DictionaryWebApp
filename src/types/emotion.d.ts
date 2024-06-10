/* eslint-disable @typescript-eslint/no-explicit-any */
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {}
}
