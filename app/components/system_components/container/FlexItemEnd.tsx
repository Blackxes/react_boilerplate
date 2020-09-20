/**
 * @File item within a flex list which will be positioned at the end of the container
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import styled, { css } from 'styled-components';

import { FlexItemEndProps } from '../../../logic/interfaces';

const FlexItemEnd: React.FC<FlexItemEndProps> = (props) => {
    return <SFlexItemEnd {...props}>{props.children}</SFlexItemEnd>;
};

const SFlexItemEnd = styled.div`
    margin-left: auto;
    ${(props) =>
        props.top &&
        css`
            margin-top: auto;
        `}
    width: fit-content;
`;

export default FlexItemEnd;
