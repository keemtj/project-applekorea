import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StFooter>footer</StFooter>;
};

const StFooter = styled.footer`
  padding: 2rem 19.4rem;
  color: ${({ theme }) => theme.color.white};
`;
export default Footer;
