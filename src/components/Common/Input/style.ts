import { fripPallete } from 'src/styles/fripPallete';
import { fripTypography } from 'src/styles/fripTypography';
import styled from 'styled-components';

export const InputWrap = styled.div`
  height: 74px;
  display: flex;
  width: 329px;

  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  label {
    color: ${fripPallete.staticBlack};
    text-align: center;

    ${fripTypography.Body.Bold}
  }

  border: none;
`;

export const Input = styled.input`
  display: flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 10px;
  background: ${fripPallete.fillAlternative};
  border: none;

  &:focus {
    outline: none;
  }
`;
