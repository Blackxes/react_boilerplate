/**
 * @File the h1 app title
 * 	considers the current route and possible render options like icons
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import * as React from 'react';

import { StaticAppTitle } from '../../../logic/configurations';
import styled from 'styled-components';

const StyledAppTitleWrap = styled.div`
    display: flex;
    align-items: center;
    color: #dfe6e9;
    background: transparent;
`;

const StyledAppTitle = styled.h1`
    margin: 0;
    font-size: 30px;
    text-align: center;
    color: #fff;
    width: 100%;
    background: linear-gradient(to right, transparent, #111111cc, transparent);
`;

const AppTitle = ({ title = '' }) => {
    return (
        <StyledAppTitleWrap>
            <StyledAppTitle>{title || StaticAppTitle}</StyledAppTitle>
        </StyledAppTitleWrap>
    );
};

export default AppTitle;
