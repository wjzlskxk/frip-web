import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Pretendard-Bold;
    src: url('/fonts/Pretendard-Bold.otf') format('opentype');
}

@font-face {
    font-family: Pretendard-Medium;
    src: url('/fonts/Pretendard-Medium.otf') format('opentype');
}

@font-face {
    font-family: Pretendard-Regular;
    src: url('/fonts/Pretendard-Regular.otf') format('opentype');
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
        text-decoration: none;
    }
  }
`;
