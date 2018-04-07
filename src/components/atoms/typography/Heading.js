import React from 'react';
import styled from 'styled-components';
import { color, fontFamily } from 'styled-system';
 // import theme from '../../common/theme';

const Heading = styled.h1`
    font-size: 3.157em;
    line-height: 1.2;
    font-weight: 600;
    ${color};
    ${fontFamily};
`;

Heading.defaultProps = {
    color: 'red',
    fontFamily: 'serif'
};

export default Heading;
