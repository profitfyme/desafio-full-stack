import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 547px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  img {
    margin-top: 125px;
    width: 363px;
    height: 97px;
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;

  form {
    margin-top: 26px;
    background: #F8F9FE;
    border-radius: 6px;
    width: 547px;
    padding-top: 22px;
    padding-bottom: 1px;
    text-align: center;

    p {
      color: #94A3B3;
      font-weight:600;
      font-size: 16px;
      margin-top: 22px;
      margin-bottom: 30px;
    }

    strong {
      color: #94A3B3;
      font-weight:400;
      font-size: 14px;
    }

    button {
      margin-top: 32px;
      margin-left: 186px;
      margin-bottom: 46px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #ffffff;
    margin-top: 16px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.07, '#ffffff')};
    }
  }
`;
