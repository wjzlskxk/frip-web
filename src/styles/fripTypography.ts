import { css, RuleSet } from 'styled-components';

export type TextSize = {
  Bold: RuleSet;
  Medium: RuleSet;
  Regular: RuleSet;
};

export type Typography = {
  Display1: TextSize;
  Display2: TextSize;
  Title1: TextSize;
  Title2: TextSize;
  Headline1: TextSize;
  Headline2: TextSize;
  Body: TextSize;
  Label: TextSize;
  Caption: TextSize;
};

export const fripTypography: Typography = {
  Display1: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 46.8px */
    `,
  },
  Display2: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 41.6px */
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 41.6px */
    `,
  },
  Title1: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Title2: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Headline1: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Headline2: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Body: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Label: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
  Caption: {
    Bold: css`
      font-family: 'Pretendard-Bold';
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    `,
    Medium: css`
      font-family: 'Pretendard-Medium';
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    `,
    Regular: css`
      font-family: 'Pretendard-Regular';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    `,
  },
};
