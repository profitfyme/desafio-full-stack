import React from 'react';

import { Container, Logo } from './styles';

import LogoIcon from '../../assets/images/logo.svg'
import LogoTestIcon from '../../assets/images/logo-test.svg'

const ProfitfymeLogo: React.FC = React.memo(() => {
  return <Logo src={LogoIcon} alt="logo" />;
});

const ProfitfymeLogoTest: React.FC = React.memo(() => {
  return <Logo src={LogoTestIcon} alt="logo" />;
});

interface Profitfyme {
  Logo: typeof ProfitfymeLogo;
  LogoTest: typeof ProfitfymeLogoTest;
}

const Profitfyme: Profitfyme & React.FC = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

Profitfyme.Logo = ProfitfymeLogo;
Profitfyme.LogoTest = ProfitfymeLogoTest;

export default Profitfyme;
