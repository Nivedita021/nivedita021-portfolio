import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiAtom, DiCode, DiCodeigniter, DiCssdeck, DiEmber } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
<Link href="/">
  <a style={{display:"flex", alignItems:"center", color:"white"}}>
    <DiCssdeck size="3rem" /> <span>PortFolio</span>
  </a>
</Link>

    </Div1>
    <Div2>
<li>
<Link href="#projects">
  <NavLink>Projects</NavLink>
</Link>

</li>
<li>
<Link href="#tech">
  <NavLink>Technologies</NavLink>
</Link>

</li>
<li>
<Link href="#about">
  <NavLink>About</NavLink>
</Link>

</li>

    </Div2>
    <Div3>
<SocialIcons href="https://github.com/Nivedita021">
  <AiFillGithub size="3rem" />
</SocialIcons>
<SocialIcons href="https://www.linkedin.com/in/nivedita-chatterjee-bb8027215">
  <AiFillLinkedin size="3rem" />
</SocialIcons>
<SocialIcons href="https://www.instagram.com/nivedita_021/">
  <AiFillInstagram size="3rem" />
</SocialIcons>
<SocialIcons href="https://www.facebook.com/nivedita.chatterjee.754365">
  <AiFillFacebook  size="3rem" />
</SocialIcons>

    </Div3>
    </Container>
);

export default Header;
