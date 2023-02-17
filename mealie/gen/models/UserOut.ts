/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LongLiveTokenOut } from './LongLiveTokenOut';

export type UserOut = {
    username?: string;
    fullName?: string;
    email: string;
    admin: boolean;
    group: string;
    favoriteRecipes?: Array<string>;
    id: number;
    tokens?: Array<LongLiveTokenOut>;
};

