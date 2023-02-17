/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecipeIngredientFood } from './RecipeIngredientFood';
import type { RecipeIngredientUnit } from './RecipeIngredientUnit';

export type RecipeIngredient = {
    title?: string;
    note?: string;
    unit?: RecipeIngredientUnit;
    food?: RecipeIngredientFood;
    disableAmount?: boolean;
    quantity?: number;
};

