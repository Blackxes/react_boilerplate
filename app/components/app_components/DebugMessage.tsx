/**
 * @File debugging component which shows a message on top right corner with margin to the edge
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { DebugMessageProps } from '../../logic/interfaces';
import Spinner from '../../../assets/images/spinner.svg';
import styled from 'styled-components';

const DebugMessage = (props: DebugMessageProps) => (
    <SMessageWrap>
        <SMessage>{props.message}</SMessage>
        {props.spinner && <SRequestSpinner src={Spinner} />}
    </SMessageWrap>
);

const SMessageWrap = styled.div`
    padding: 10px 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    place-items: center;
    background: #111;
    border: 1px solid palevioletred;
    > * {
        margin: 0 10px 0 0;
        :last-child {
            margin-right: 0;
        }
    }
`;
const SMessage = styled.p`
    font-size: 16px;
    color: #fff;
`;

const SRequestSpinner = styled.img`
    width: 25px;
    color: #fff;
`;

export default DebugMessage;
