import React from 'react'
import Link from 'gatsby-link'
import Heading from '../components/atoms/typography/Heading';
import Intro from '../components/atoms/typography/Intro';
const IndexPage = () => (
  <div>
    <Heading>Hello.</Heading>
    <Intro>I'm Dan Jones, a <strong>creative technologist</strong> based in Sheffield in the UK. 
    <br />I combine deep technical knowledge with strong interaction design skills. What it means in practice is that I endeavour to help designers and engineers understand each other better.
    <br />Right now my focus is on the world of design systems, but starting from the position of trying to understand what a design system could get in the way of.</Intro> 
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
