/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Recipe } from './Recipe';

export type RecipeCategoryResponse = {
    name: string;
    id: number;
    slug: string;
    recipes?: Array<Recipe>;
};

