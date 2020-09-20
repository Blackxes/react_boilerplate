/**
 * @File display the google profile information as well as some functionalities
 * 	like logout
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../system_components/trigger/Button';
import FlexContainer from '../../system_components/container/FlexContainer';

const GoogleProfile: React.FC = (props) => {
    return (
        <SGoogleProfile>
            <Button onClick={() => gapi.auth2.getAuthInstance().signOut()}>Logout</Button>
        </SGoogleProfile>
    );
};

const SGoogleProfile = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default GoogleProfile;
