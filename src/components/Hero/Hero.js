import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
<SectionTitle main center>

  Hello ! <br />
  I am Nivedita.<br />
  Welcome to my personal Portfolio
</SectionTitle>
<SectionText>
  I am Currently a Student at NIT, Jamshedpur, ECE Branch. I have great interest in competitive programming and presently I am Studying DSA. I am also interested in Developing Websites, and learning new things related to it.  
</SectionText>
<Button onClick ={() => window.location = 'https://www.linkedin.com/in/nivedita-chatterjee-bb8027215'}>
  Learn More
</Button>
  </LeftSection>
  </Section>
);

export default Hero;