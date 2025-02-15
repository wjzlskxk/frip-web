import { fripTypography } from 'src/styles/fripTypography';
import { fripPallete } from 'src/styles/fripPallete';
import styled from 'styled-components';

export const ButtonWrap = styled.div`
  width: 325px;
  height: 43px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  background-color: ${fripPallete.primaryNormal};
  border: none;

  span {
    color: ${fripPallete.staticWhite};
    text-align: center;

    ${fripTypography.Headline1.Bold}
  }
`;
