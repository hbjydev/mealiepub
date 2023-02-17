/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListItem } from './ListItem';

export type ShoppingListOut = {
    name: string;
    group?: string;
    items: Array<ListItem>;
    id: number;
};

