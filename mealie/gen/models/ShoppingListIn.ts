/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListItem } from './ListItem';

export type ShoppingListIn = {
    name: string;
    group?: string;
    items: Array<ListItem>;
};

