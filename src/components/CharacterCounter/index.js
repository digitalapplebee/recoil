import React from 'react';
import { useRecoilState } from 'recoil';
import CharacterCount from 'components/CharacterCount';
import { textState } from 'recoil/store';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Echo: {text}</p>
    </div>
  );
}

export default CharacterCounter;