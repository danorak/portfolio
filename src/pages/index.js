import React from 'react'
import Link from 'gatsby-link'
import Heading from '../components/atoms/typography/Heading';
import Intro from '../components/atoms/typography/Intro';
const IndexPage = () => (
  <div>
    <Heading>Old and still learning.</Heading>
    <Intro>Hello. I'm Dan Jones, a <strong>creative technologist</strong> 
    based in Sheffield in the UK. 
    <br />A what? 
    <br />A creative technologist. A hybrid designer-developer, in other words. I combine deep technical knowledge and skills with the ability to design for people. What it means in practice is that I endeavour to help designers and engineers understand each other better. I also maintain a focus on current and future technologies and try to figure out how we might use them.</Intro> 
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
