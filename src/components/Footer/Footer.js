import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:6299909388">6299 909 388</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:niveditabarn21@gmail.com">niveditabarn21@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Hard Work is success !</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Nivedita021">
  <AiFillGithub size="3rem" />
</SocialIcons>
<SocialIcons href="https://www.linkedin.com/in/nivedita-chatterjee-bb8027215">
  <AiFillLinkedin size="3rem" />
</SocialIcons>
<SocialIcons href="https://www.instagram.com/nivedita_021/">
  <AiFillInstagram size="3rem" />
</SocialIcons>

</SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
