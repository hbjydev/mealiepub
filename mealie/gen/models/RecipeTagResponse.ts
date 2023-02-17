/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Recipe } from './Recipe';

export type RecipeTagResponse = {
    name: string;
    id: number;
    slug: string;
    recipes?: Array<Recipe>;
};

