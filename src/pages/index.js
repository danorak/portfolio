import React from 'react'
import Link from 'gatsby-link'
import Heading from '../components/atoms/typography/Heading';
import Intro from '../components/atoms/typography/Intro';
import P from '../components/atoms/P';

const IndexPage = () => (
  <div>
    <section>
    <Heading>Hello, you.</Heading>
    </section>
    <section>
      <Intro>I’m Dan, a designer and developer based in Sheffield, UK.</Intro>
    </section>
    <section>
      <P>I’m currently building Capital One UK’s design system, and trying to find ways to bring design and engineering closer together.</P>
    </section>
    <section>
      <a href="#">Twitter.</a>
      <a href="#">LinkedIn.</a>
      <a href="#">Email😔.</a>
    </section>
  </div>
)

export default IndexPage;
