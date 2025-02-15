import { showToast } from 'src/libs/toast/toast';
import { SigninData } from 'src/types/Auth/auth.type';
import axios from 'axios';
import React, { useCallback, useState } from 'react';

export const useAuth = () => {
  const [signinData, setSigninData] = useState<SigninData>({
    id: '',
    password: '',
  });

  const handleSigninData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setSigninData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setSigninData]
  );

  const submitSignin = async () => {
    const { id, password } = signinData;

    if (!id) {
      showToast('info', '아이디를 입력해주세요.');
      return;
    }

    if (!password) {
      showToast('info', '비밀번호를 입력해주세요.');
      return;
    }

    try {
      await axios
        .post('https://frip.ngrok.app/login', {
          username: id,
          password,
        })
        .then(() => {
          showToast('success', '로그인 성공');
        });
    } catch (error) {
      showToast('error', '로그인 실패');
    }
  };

  return { signinData, handleSigninData, submitSignin };
};
