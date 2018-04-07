import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'; 
import theme from '../components/common/theme';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
  <div>
    <Helmet
      title="Dan Jones. An interaction designer."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div bg="white">
      {children()}
    </div>
  </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
