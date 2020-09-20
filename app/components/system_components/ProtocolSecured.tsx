/**
 * @File component which only display its children when the current protocol matches the given prop settings
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import { ProtocolSecuredProps } from '../../logic/interfaces';
import styled from 'styled-components';

const ProtocolSecured: React.FC<ProtocolSecuredProps> = (props) => {
    // removes the ':' at the end
    const protocol = window?.location?.protocol?.slice(0, -1);

    // pass or block based on what list is defined
    if (
        (protocol && props.blacklist && !props.blacklist.includes(protocol)) ||
        (props.whitelist && props.whitelist.includes(protocol))
    ) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }

    return (props.warning && <p>{props.warning}</p>) || null;
};

export default ProtocolSecured;
