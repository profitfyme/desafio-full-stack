import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%);
`;

export const Logo = styled.img`
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
