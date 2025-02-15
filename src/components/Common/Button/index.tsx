import React from 'react';
import * as S from './style';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <S.ButtonWrap onClick={onClick}>{children}</S.ButtonWrap>;
};

export default Button;
