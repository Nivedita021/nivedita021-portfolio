import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 500, text: 'DSA Questions Solved'},
  { number: 100, text: 'Questions solved in Leetcode', },
  { number: 1800, text: 'Max. CodeChef Rating', },
  { number: 1252, text: 'Max. CodeForecs Rating', }
];



const Acomplishments = () => (
<Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;
