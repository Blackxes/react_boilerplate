/**
 * @File fallback component to login to google when not logged in
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../system_components/trigger/Button';

const GoogleLogin = () => {
    return <SGoogleLogin onClick={() => gapi.auth2.getAuthInstance().signIn()}>Login</SGoogleLogin>;
};

const SGoogleLogin = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default GoogleLogin;
