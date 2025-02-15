import { fripPallete } from 'src/styles/fripPallete';
import { fripTypography } from 'src/styles/fripTypography';
import styled from 'styled-components';

export const SigninWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 223px;
    height: 101.979px;
    aspect-ratio: 223/100;
  }
`;

export const SiginForm = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ChangeAuthButton = styled.div`
  p {
    color: ${fripPallete.labelNormal};
    ${fripTypography.Label.Medium};
  }

  span {
    color: ${fripPallete.primaryAlternative};
    ${fripTypography.Label.Medium};
    cursor: pointer;
    text-decoration: underline;
  }
`;
