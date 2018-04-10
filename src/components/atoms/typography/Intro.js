import styled from 'styled-components'
import { color, fontFamily, fontSize } from 'styled-system';

const Intro = styled.p`
    ${fontSize};
    line-height: 1.2;
    ${color};
    ${fontFamily};
`;

Intro.defaultProps = {
    color: 'black',
    fontFamily: 'sansSerif',
    fontSize: [0,3]
};

export default Intro;