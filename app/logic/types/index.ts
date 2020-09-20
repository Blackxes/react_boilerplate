/**
 * @File contains global/default type and interface configurations
 *
 * @Author Alexander Bassov Sat Sep 05 2020
 * @Email blackxes.dev@gmail.com
 */

// import { IconLookup } from '@fortawesome/free-solid-svg-icons';

import { RouteProps } from 'react-router-dom';

/**
 * app interfaces
 */

/**
 * props
 */
export interface AppProps {
    title?: string;
}

/**
 * system/qol/miscellaneous interfaces
 */

/**
 * component props
 */
export interface ProtocolSecuredProps {
    blacklist?: string[];
    whitelist?: string[];
    warning?: string;
}

export interface FlexContainerProps {
    vertical?: boolean;
    margin?: number;
    justify?: boolean | string;
    align?: boolean | string;
}

export interface FlexItemEndProps {
    left?: boolean;
    top?: boolean;
}

export interface GridContainerProps {
    vertical?: boolean;
    gap?: number;
    template?: string;
    /** fallback value when columns/rows is not defined */
    count?: number;
    columns?: number;
    rows?: number;
    /** unit used for the width of each item // default is 1fr */
    unit?: number;
}

export interface ListItemProps {
    align?: string;
    justify?: string;
}

export type ButtonTypes = 'regular' | 'ok' | 'error' | 'warning' | 'info' | 'submit';
export interface ButtonProps {
    type?: ButtonTypes;
    fullWidth?: boolean;
    small?: boolean;
}

export type FontWeight = 'normal' | 'bold' | 'light' | 'thin';
export type FontStyle = 'normal' | 'italic' | 'oblique';
export interface ParagraphProps {
    fontFamily?: string;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
}

/** for a group of images which have the same naming pattern */
export interface ImageGroupConfig {
    /** directory in which the items are */
    dir: string;
    /** extension of the image [default: '.jpg'] */
    ext: string;
    /** prepending value for the image names in items [default: 'bg'] */
    prefix?: string;
    /** appending value for the image names in items [default: ''] */
    postfix?: string;
    items?: ImageConfig[];
    /** when generating a group of images this value defines whether the images are searched by an index instead of a name [default: false] */
    incremental?: boolean;
    /** incremental search starting index [default: 1] */
    startingIndex?: number;
    /** defines the ending index  */
    endingIndex?: number;
}

/** how the icons are configured */
export interface ImageConfig {
    /** name of this config */
    name: string;
    /** key eg. used to identify its context whether its a general icon or a background */
    key?: string;
    /** relative path to the image / when not given the key is used to find the file */
    path?: string;
    /** directory of the file / will be pretended before path */
    dir?: string;
    /** file extension */
    ext?: string;
}

/** routes */
export interface RouteConfigurationItemProps extends RouteProps {
    id: string;
    key: string;
    title?: string;
}

export interface RouteGenerationConfigurationItem extends RouteProps {
    id: string;
    key: string;
    title?: string;
    parentKey: string;
}
