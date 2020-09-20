/**
 * @File contains the main application component
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { AppWidth, WebsiteTitle } from '../logic/configurations';

import { AppProps } from '../logic/types/index';
import BackgroundImage from './app_components/Background';
import GlobalStyle from '../GlobalStyle';
import ProtocolSecured from './system_components/ProtocolSecured';
import { WrongProtocolWarning } from '../logic/texts';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

// import { generateRoutesFromMenu } from '../logic/functions/routes';

const App = class extends React.Component<AppProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = WebsiteTitle;
    }

    render() {
        return (
            <ProtocolSecured whitelist={['http', 'https']} warning={WrongProtocolWarning}>
                <GlobalStyle />
                <BackgroundImage />
                <SApp>
					<SHeader></SHeader>
					<SBody></SBody>
                </SApp>
            </ProtocolSecured>
        );
    }
};

const SApp = styled.div`
    margin: 0 auto;
    max-width: ${(props) => AppWidth}px;
    min-height: 100vh;
`;

const SHeader = styled.header`
    padding: 40px 0 100px;
`;

const SBody = styled.main`
    display: flex;
    flex-direction: row;
`;

export default hot(App);
