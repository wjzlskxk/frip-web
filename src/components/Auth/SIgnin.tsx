import React from 'react';
import * as S from './style';
import logo from 'src/assets/8799637dfa263e68.png';
import Input from '../Common/Input';
import Button from '../Common/Button';
import { useAuth } from 'src/hooks/Auth/useAuth';

const Signin = () => {
  const { signinData, handleSigninData, submitSignin } = useAuth();

  return (
    <S.SigninWrap>
      <img src={logo} alt="logo" />
      <S.SiginForm>
        <S.InputWrap>
          <Input
            label="아이디"
            name="id"
            placeholder="아이디를 입력해주세요."
            value={signinData.id}
            onChange={handleSigninData}
            id="id"
            type="text"
            functions="password"
          />
          <Input
            label="비밀번호"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={signinData.password}
            onChange={handleSigninData}
            id="password"
            type="password"
          />
        </S.InputWrap>
        <Button onClick={submitSignin}>
          <span>로그인</span>
        </Button>
        <S.ChangeAuthButton>
          계정이 없으신가요?
          <span>회원가입</span>
        </S.ChangeAuthButton>
      </S.SiginForm>
    </S.SigninWrap>
  );
};

export default Signin;
