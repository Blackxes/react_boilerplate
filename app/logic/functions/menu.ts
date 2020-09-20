/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Sep 02 2020
 * @Email blackxes.dev@gmail.com
 */

import {
    MappedMenuGroup,
    MappedMenuItem,
    MenuConfigItem,
    MenuTreeBuildingOptions
} from '../types/menu';
import { MenuConfigItemParentType, MenuKeyType } from '../types/menu';
import _, { isArray, isString, keys } from 'lodash';
import { filterByProperty, findByProperty } from '../miscellaneous/functions';
import { menuConfig, menuGroups, menuItems } from '../static/menu';

import ow from 'ow';

/**
 * builds a menu tree
 */
export function getMenuTree<T extends MenuTreeBuildingOptions>(
    menuKey: MenuKeyType,
    options?: T,
    recursive: boolean = true
): T['noGroups'] extends true ? MappedMenuItem[] : MappedMenuGroup[] {
    ow(menuKey, ow.string.nonEmpty);
    ow(keys(menuConfig), ow.array.includes(menuKey));

    const items = getMenuConfigItems(menuKey, undefined);
    const processor = !options?.noGroups ? getMappedMenuGroups : getMappedMenuItems;
    const mapped = processor.apply(this, [items, false, recursive, options]);

    return mapped;
}

export const getMappedMenuGroups = (
    allConfigItems: MenuConfigItem[],
    parent: MenuConfigItemParentType = undefined,
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuGroup[] => {
    let mappedItems = getMappedMenuItems(allConfigItems, parent, recursive, options);
    const grouped = !options?.noGroups ? _.groupBy(mappedItems, 'group.key') : { mappedItems };

    const mapped: MappedMenuGroup[] = _.map(
        grouped,
        (items): MappedMenuGroup => {
            const group = items.length && findByProperty(menuGroups, items[0].group);
            return {
                ...group,
                items
            };
        }
    );

    return mapped;
};

export const getMappedMenuItem = (
    key: MenuKeyType,
    allConfigItems: MenuConfigItem[],
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuItem => {
    const item = findByProperty(menuItems, key);
    const config = findByProperty(allConfigItems, key);
    const group = findByProperty(menuGroups, config.group);
    const children = recursive
        ? !options?.noGroups
            ? getMappedMenuGroups(allConfigItems, key, recursive, options)
            : getMappedMenuItems(allConfigItems, key, recursive, options)
        : [];

    const mapped: MappedMenuItem = {
        ...config,
        ...item,
        group: group,
        parent: findByProperty(menuItems, key, 'parent'),
        children
    };

    return mapped;
};

export const getMappedMenuItems = (
    allConfigItems: MenuConfigItem[],
    parent: MenuConfigItemParentType = undefined,
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuItem[] => {
    const items = getMenuConfigItems(allConfigItems, parent);
    let mapped = items.map((item) =>
        getMappedMenuItem(item.key, allConfigItems, recursive, options)
    );

    if (!options?.noSort) mapped = _.sortBy(mapped, ['order']);

    return mapped;
};

/**
 * returns the children of a menu item in a menu configuration
 *
 * @param menuKey the key of the menu configuration
 * @param parent parent menu key to filter
 * 	string = returns items with parent x
 * 	false = returns items without a parent
 * 	undefined = returns all items
 */
export function getMenuConfigItems(
    menuKey: MenuKeyType,
    parent?: MenuConfigItemParentType
): MenuConfigItem[];
export function getMenuConfigItems(
    items: MenuConfigItem[],
    parent?: MenuConfigItemParentType
): MenuConfigItem[];
export function getMenuConfigItems(
    source: MenuKeyType | MenuConfigItem[],
    parent?: MenuConfigItemParentType
): MenuConfigItem[] {
    const collection =
        (isString(source) && menuConfig[source].items) || (isArray(source) && source) || [];

    return (
        (typeof parent == 'undefined' && collection) ||
        filterByProperty(collection, parent === false ? undefined : parent, 'parent')
    );
}
