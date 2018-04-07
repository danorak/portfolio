import styled from 'styled-components'
import { color, fontFamily } from 'styled-system';

const Intro = styled.p`
    font-size: 1.777em;
    line-height: 1.2;
    ${color};
    ${fontFamily};
`;

Intro.defaultProps = {
    color: 'black',
    fontFamily: 'serif'
};

export default Intro;