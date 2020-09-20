/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Sep 02 2020
 * @Email blackxes.dev@gmail.com
 */

import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import { RouteProps } from 'react-router-dom';

export type MenuKeyType = MenuItem['key'];
export type MenuConfigItemParentType = MenuKeyType | false | undefined;
export type MenuGroupKeyType = MenuGroup['key'];

/**
 * menu config
 */

/** menu build configuration */
export interface MenuConfigWrapper {
    [key: string]: MenuConfig;
}

export interface MenuConfig {
    items?: MenuConfigItem[];
}

export interface MenuConfigItem {
    key: string;
    /** key of a menu group item */
    group?: MenuGroupKeyType;
    /** numeric order / negative and positive possible [default: 0] */
    order?: number;
    /** parent menu item key */
    parent?: MenuConfigItemParentType;
}

/**
 * menu tree has been built types
 */
export interface MappedMenuItem extends MenuItem {
    group?: MenuGroup;
    parent?: MenuItem;
    order?: number;
    children?: MappedMenuGroup[];
}

/** menu tree */
export interface MappedMenuGroup extends MenuGroup {
    items?: MappedMenuItem[];
}

/**
 * menu definition detailed information about menu components
 */
type MenuItemRouteProps = Partial<Pick<RouteProps, 'component' | 'exact' | 'path' | 'strict'>>;

export interface MenuItem extends MenuItemRouteProps {
    key: string;
    title?: string;
    /** fontawesome icon */
    icon?: IconLookup;
    renderIcon?: boolean;
    renderTitle?: boolean;
}

export interface MenuGroup {
    title?: string;
    key?: string;
}

export interface MenuTreeBuildingOptions {
    noSort?: boolean;
    noGroups?: boolean;
}
