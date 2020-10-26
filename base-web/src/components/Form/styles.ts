import styled, { css } from 'styled-components';

const mediaQuery = css`
  @media only screen and (max-width: 600px) {
    width: 250px;
  }

  @media only screen and (min-width: 600px) {
    width: 250px;
  }

  @media only screen and (min-width: 768px) {
    width: 550px;
  }

  @media only screen and (min-width: 992px) {
    width: 550px;
  }

  @media only screen and (min-width: 1200px) {
    width: 550px;
  }
`;

export const Container = styled.form`
  background: #F8F9FE;
  border-radius: 6px;
  padding: 44px 46px;
  width: 547px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery}
`;

export const Header = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #94A3B3;
  margin-bottom: 30px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 547px;
  margin-top: 16px;

  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
  }

  ${mediaQuery}
`;
