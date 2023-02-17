/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecipeSummary } from './RecipeSummary';

export type UserFavorites = {
    username?: string;
    fullName?: string;
    email: string;
    admin: boolean;
    group?: string;
    favoriteRecipes?: Array<RecipeSummary>;
};

