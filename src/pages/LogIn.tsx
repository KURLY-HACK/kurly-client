import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { login } from '../store/slices/login/loginSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

const LogIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [toast, setToast] = useState(false);

  const [loginState, setLoginState] = useState(false);
  const isLoginned = useAppSelector((state: RootState) => state.login.success);
  useEffect(() => {
    setLoginState(isLoginned);
  }, [isLoginned]);

  if (loginState === true) {
    navigate('/');
  }
  console.log(isLoginned, loginState);

  const showToast = () => {
    new Promise((resolve) => {
      setToast(true);
      setTimeout(() => {
        resolve(setToast(false));
      }, 5000);
    });
  };
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.SyntheticEvent) => {
    try {
      await dispatch(login({ id, password })).unwrap();
    } catch (err) {
      showToast();
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setId(value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  return (
    <div>
      <Header />
      {toast && isLoginned === false && (
        <Toast>아이디, 비밀번호를 다시 입력해주세요! </Toast>
      )}
      <LogInContainer>
        <LoginTitle>로그인</LoginTitle>
        <LogInInput
          type={'text'}
          value={id}
          onChange={handleIdChange}
          placeholder="아이디를 입력해주세요"
        ></LogInInput>
        <LogInInput
          type={'password'}
          value={password}
          onChange={handlePwChange}
          placeholder="비밀번호를 입력해주세요"
        ></LogInInput>
        <LoginButton onClick={onSubmit}>로그인</LoginButton>
      </LogInContainer>
    </div>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  width: 100%;
  padding-top: 250px;
  height: 270px;
  display: flex;
  flex-direction: column;
`;

const LoginTitle = styled.div`
  margin: auto;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
  color: #333333;
`;

const LogInInput = styled.input`
  padding-left: 10px;
  margin: auto;
  width: 340px;
  height: 54px;
  border: 1px solid #dddfe1;
  border-radius: 5px;

  :focus {
    outline: none;
    border: 1px solid #333333;
  }
`;

const LoginButton = styled.div`
  margin: auto;
  cursor: pointer;
  width: 350px;
  height: 54px;
  text-align: center;
  line-height: 54px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #5f0080;
`;

const Toast = styled.section`
  width: 300px;
  text-align: center;
  position: fixed;
  bottom: 50px;
  left: calc(50vw - 160px);

  background: rgba(51, 51, 51, 0.5);
  color: #ffffff;

  border-radius: 10px;

  padding: 15px 20px;
`;
