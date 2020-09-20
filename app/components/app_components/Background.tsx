/**
 * @File background image component
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { BackgroundImageCount } from '../../logic/configurations';
import { BackgroundImageProps } from '../../logic/interfaces';
import styled from 'styled-components';

const RandomBackgroundIndex = Math.ceil(Math.random() * BackgroundImageCount);
const Background = import(`../../../assets/images/bg${RandomBackgroundIndex}.jpg`);

const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
    const [bgImage, setBgImage] = React.useState<string>('');
    Background.then((module) => setBgImage(module.default));

    return <StyledBackgroundImage image={props.image || bgImage} {...props} />;
};

const StyledBackgroundImage: React.FC = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: #1e1916 fixed repeat-y url('${(props: BackgroundImageProps) => props.image || ''}');
    background-size: cover;
`;

export default BackgroundImage;
