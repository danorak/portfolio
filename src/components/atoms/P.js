import styled from 'styled-components';
import { color, fontFamily } from 'styled-system';

const P = styled.p`
    ${color};
    ${fontFamily};
    font-size: 20px;
    line-height: 1.3;
`;

P.defaultProps = {
    color: 'black',
    fontFamily: 'sansSerif'
};

export default P;