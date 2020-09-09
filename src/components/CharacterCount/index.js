import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import { textState } from 'recoil/store';


const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <p>Character Count: {count}</p>;
}