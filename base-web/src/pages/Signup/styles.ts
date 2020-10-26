import styled from 'styled-components';

export const LogoWrap = styled.div`
  width: 363px;
  margin-bottom: 26px;

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

export const Term = styled.p`
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #94A3B3;
  margin-bottom: 18px;

  a {
    color: #4f53bc;
  }
`;

interface SubmitBtnProps {
  isActive?: boolean;
}

export const SubmitBtn = styled.button<SubmitBtnProps>`
  background: ${props => props.isActive ? '#7DD56F' : '#a8e2a1'};
  box-shadow: 0px 4px 10px rgba(125, 213, 111, 0.4);
  border-radius: 4px;
  border: 0;
  padding: 10px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #FFFFFF;

  img {
    margin: 0 14px;
  }
`;
