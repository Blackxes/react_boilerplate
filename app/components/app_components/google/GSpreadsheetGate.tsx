/**
 * @File google spreadsheet wrapper
 * 	children are rendered when access is granted
 * 	this component provides a react context which can be used
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { GSpreadsheetGateProps, GSpreadsheetGateState } from '../../../logic/interfaces';

import DebugMessage from '../DebugMessage';

const GSpreadsheetGate = class extends React.Component<
    GSpreadsheetGateProps,
    GSpreadsheetGateState
> {
    constructor(props: GSpreadsheetGateProps) {
        super(props);

        this.state = {
            userLoggedIn: false,
            googleApiLoaded: false,
            googleApiInitialized: false,
            authInstance: null,
            errors: []
        };
    }

    componentDidMount() {
        this.loadGoogleApi();
    }

    loadGoogleApi = () => {
        gapi.load('client', () => {
            this.setState(
                {
                    googleApiLoaded: true
                },
                this.initGoogleApi
            );
        });
    };

    initGoogleApi = () => {
        const init = gapi.client.init({
            apiKey: this.props.apiKey,
            discoveryDocs: this.props.discoveryDocs,
            clientId: this.props.clientId,
            scope: this.props.scopes.join(' ')
        });

        init?.then(() => {
            this.setState(
                {
                    authInstance: gapi.auth2.getAuthInstance(),
                    googleApiInitialized: true
                },
                this.postGoogleInitProcess
            );
        });

        init?.catch((error) => {
            this.setState({
                errors: [
                    ...this.state.errors,
                    {
                        error: error.error,
                        details: error.details
                    }
                ]
            });
        });
    };

    postGoogleInitProcess = () => {
        this.state.authInstance.isSignedIn.listen(this.onSignedChange);

        this.onSignedChange(this.state.authInstance.isSignedIn.get());
    };

    onSignedChange = (status: boolean) => {
        this.setState({
            userLoggedIn: status,
            errors: []
        });
    };

    onSignIn = () => {
        this.state.authInstance.signIn();
    };

    render() {
        return (
            (!this.state.googleApiLoaded && <DebugMessage message="Loading" spinner />) ||
            (!this.state.googleApiInitialized && <DebugMessage message="Initializing" spinner />) ||
            (!this.state.userLoggedIn && React.createElement(this.props.noAccessFallback, {})) ||
            this.props.children
        );
    }
};

export default GSpreadsheetGate;
