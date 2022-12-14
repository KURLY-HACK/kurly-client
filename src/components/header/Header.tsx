import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { logout } from '../../store/slices/login/loginSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLogin = useAppSelector((state: RootState) => state.login.success);

  return (
    <Wrapper>
      <HeaderContainer>
        <LogoContainer onClick={() => navigate('/')}>
          <img src="/images/Logo.svg" />
        </LogoContainer>
        <Menu>신상품</Menu>
        <Menu>베스트</Menu>
        <Menu>알뜰쇼핑</Menu>
        <Menu onClick={() => navigate('/subscribe-list')}>구독 리스트</Menu>
        {isLogin ? (
          <LoginButton onClick={() => dispatch(logout())}>로그아웃</LoginButton>
        ) : (
          <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
        )}
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 5px #d9d9d9;
  background: #ffffff;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 3;
`;

const HeaderContainer = styled.div`
  display: flex;
  line-height: 56px;
  margin: auto;
  width: 852px;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  padding-top: 8px;
  width: 82px;
  height: 42px;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  height: 36px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  &:hover {
    color: #5f0080;
    border-bottom: 1px solid #5f0080;
    cursor: pointer;
  }
`;

const LoginButton = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 35px;
  color: #333333;
  &:hover {
    color: #5f0080;
    border-bottom: 1px solid #5f0080;
    cursor: pointer;
  }
`;
