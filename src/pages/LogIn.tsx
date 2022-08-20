import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { login } from '../store/slices/login/loginSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

const LogIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.SyntheticEvent) => {
    dispatch(login({ id, password }));
  };

  const token = useAppSelector((state: RootState) => state.login.data);
  const success = useAppSelector((state: RootState) => state.login.success);

  console.log(id, password);
  console.log('👾', token, success);
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
