/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Sep 02 2020
 * @Email blackxes.dev@gmail.com
 */

import {
    MappedMenuItem,
    MenuConfigItem,
    MenuConfigItemParentType,
    MenuKeyType
} from '../types/menu';
import { getMappedMenuItems, getMenuConfigItems } from './menu';

import { RouteProps } from 'react-router-dom';
import _ from 'lodash';
import { menuRoutesConfig } from '../static/routes';

export const flattenAndConcatenateMenuItems = (items: MenuConfigItem[]) => {};

export const generateRoutesFromMenu = (menuKey: MenuKeyType, parent?: MenuConfigItemParentType) => {
    const items = getMappedMenuItems(getMenuConfigItems(menuKey, parent || false), parent, false, {
        noGroups: true
    });

    const routes = items.reduce((paths, item) => {
        const children = generateRoutesFromMenu(menuKey, item.key);

        paths.push({
            ...item,
            ...(menuRoutesConfig.find((config) => config.key == item.key) || {})
        });

        children.forEach((child) => {
            const routeConfig = menuRoutesConfig.find((item) => item.key == child.key);

            paths.push({
                ...child,
                ...(routeConfig || {}),
                path: item.path + child.path
            });
        });

        return paths;
    }, []);

    return routes;
};
