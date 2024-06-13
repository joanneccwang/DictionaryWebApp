# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Solution URL: []()
- Live Site URL: [Live Demo](https://joanneccwang.github.io/DictionaryWebApp)

## My process

### Built with

- Vite
- [React](https://reactjs.org/) - JS library
- [Emotion](https://emotion.sh/docs/introduction) - For CSS In JS

### What I learned

In this project, I learned to use different common react hooks.

a. `useEffect` to watch certain state and apply side effects like fetching API response or update other states

```js
import { useEffect } from 'react';

useEffect(() => {
  if (currentKeyword === '') return;
  getVocabDefinition(currentKeyword);
}, [currentKeyword]);
```

b. `useContext` to provide context accross components. This hook is similar to the `provide/inject` syntax provided by Vue3

```js
import { createContext, useContext } from 'react';

type TypeCurrentKeywordContext = {
  currentKeyword: string;
  handleSearch: (keyword: string) => void;
};

const CurrentKeywordContext = createContext<TypeCurrentKeywordContext | null>(
  null
);

const { handleSearch } = useContext(
  CurrentKeywordContext
) as TypeCurrentKeywordContext;
```

### Continued development

- [] Show error block if the definition of the searched keyword cannot be found
- [] Add theme switch to toggle between dark mode and light mode
- [] Add dropdown menu to choose font preference
- [] Click the audio button to play phonetic audio

## Author

- Website - [Resume](https://joanneccwang.github.io/resume)
- Frontend Mentor - [@joanneccwang](https://www.frontendmentor.io/profile/yourusername)
