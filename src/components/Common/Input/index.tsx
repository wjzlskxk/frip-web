import React from 'react';
import * as S from './style';

interface InputProps {
  isTitle?: boolean;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
  functions?: string | (() => void);
}

const Input = ({ label, placeholder, value, onChange, id, type, functions, isTitle = true, name }: InputProps) => {
  return (
    <S.InputWrap>
      {isTitle && <label>{label}</label>}
      <S.Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        type={type}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (typeof functions === 'function') {
              functions();
            } else if (typeof functions === 'string') {
              const elemId = functions;
              document.getElementById(elemId)?.focus();
            }
          }
        }}
      />
    </S.InputWrap>
  );
};

export default Input;
