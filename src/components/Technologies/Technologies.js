import React from 'react';
import { DiBootstrap, DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I have worked with a range of Technologies in the web development field right from Front-end to Back-end.
   </SectionText>
   <List>
     <ListItem>
     <DiReact size="3rem" />
     <ListContainer>
       <ListTitle>Front-End</ListTitle>
       <ListParagraph>
         Experience with <br />
         ReactJS<br />
         HTML5<br />
         CSS3<br />
        
       </ListParagraph>
     </ListContainer>
     </ListItem>
     <ListItem>
     <DiFirebase size="3rem" />
     <ListContainer>
       <ListTitle>Back-End</ListTitle>
       <ListParagraph>
         Experience with <br />
         NodeJS<br />
         MongoDB<br />
         Express<br />
       </ListParagraph>
     </ListContainer>
     </ListItem>
     <ListItem>
     <DiBootstrap size="3rem" />
     <ListContainer>
       <ListTitle>Others</ListTitle>
       <ListParagraph>
         Experience with <br />
         Bootstrap<br />
         Javascript<br />
         Jquery<br />
         Saas<br />
        
       </ListParagraph>
     </ListContainer>
     </ListItem>
     
   </List>
   </Section>
);

export default Technologies;
