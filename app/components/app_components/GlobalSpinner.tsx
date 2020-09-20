/**
 * @File global loading spinner / is centered horizontally/vertically
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import SpinnerSVG from '../../../assets/images/spinner.svg';
import styled from 'styled-components';

const GlobalSpinner = () => (
    <SSpinnerWrap>
        <SSpinner src={SpinnerSVG} />
    </SSpinnerWrap>
);

const SSpinnerWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    place-content: center;
`;

const SSpinner = styled.img`
    width: 100px;
`;

export default GlobalSpinner;
