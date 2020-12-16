import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WrapperContent = styled.div`
  width: 547px;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const WrapperLogo = styled.div`
  width: 363px;
  margin-bottom: 26px;  
`

export const WrapperForm = styled.div`
  width: 100%;
  height: 637px;
  background-color: #F8F9FE;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const FormTitle = styled.h2`
  font-size: 16px;
  color: #94A3B3;
  text-align: center;
  margin: 44px 0 30px;
  font-family: 'Open sans';
`

export const FormInput = styled.input`
  width: 456px;
  height: 44px;
  color: #A0A4A8;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.05);
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 24px;

  ::placeholder {
    color: #A0A4A8;
    font-size: 16px;
    font-weight: 600;
  }  
`

export const FormTerms = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #94A3B3;
`

export const FormSpan = styled.span`
  color: #4F53BC;
`

export const FormButton = styled.button`
  width: 160px;
  height: 42px;
  background-color: #7DD56F;
  border-radius: 4px;
  border: none;
  color: white;
  margin-top: 18px;
  font-weight: 700;
  font-size: 16px;
`

export const UserActions = styled.div`
  width: 547px; 
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`

export const PasswordRecovery = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600; 
`

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 547px;
`

export const Links = styled(Link)`
  color: white;
  font-size: 16px;
  font-family: 'Open sans';
  text-decoration: none;
`
