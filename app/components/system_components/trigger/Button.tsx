/**
 * @File base button component - can be used a regular button
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { ButtonProps, ButtonTypes } from '../../../logic/interfaces';
import styled, { css } from 'styled-components';

import { FontFamily } from '../../../logic/configurations';

const handleButtonTypeColor: Function = (type: ButtonTypes) => {
    switch (type) {
        case 'ok':
            return '#099e31';
        case 'error':
            return '#d84b4c';
        case 'warning':
            return '#eab800';
        case 'info':
            return '#558fc9';
        case 'submit':
            return '#ffa600';
        case 'regular':
        default:
            return '#2d3436';
    }
};

const handleButtonTypeHoverColor: Function = (type: ButtonTypes) => {
    switch (type) {
        case 'ok':
            return '#066720';
        case 'error':
            return '#8c0001';
        case 'warning':
            return '#a98f31';
        case 'info':
            return '#06427d';
        case 'submit':
            return '#af7200';
        case 'regular':
        default:
            return '#333333';
    }
};

const StyledButton = styled.button`
    padding: 7px 12px;
    border: 2px dashed;
    outline: none;
    width: ${(props: ButtonProps) => (props.fullWidth ? '100%' : 'fit-content')};
    font-family: '${(props: ButtonProps) => FontFamily}';
    color: inherit;
    border-color: ${(props: ButtonProps) => handleButtonTypeColor(props.type || 'regular')};
    transition: filter 0.2s ease-in-out;
    :hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
    :active {
        // filter: hue-rotate(270deg);
        filter: sepia(1);
    }
    :focus {
    }

    ${(props: ButtonProps) =>
        props.small &&
        css`
            padding: 5px 10px;
            font-size: 12px;
        `}
`;

/**
 * button component
 */
export const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
    return <StyledButton {...props} />;
};
