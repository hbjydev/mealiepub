/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentOut } from './CommentOut';
import type { Nutrition } from './Nutrition';
import type { RecipeAsset } from './RecipeAsset';
import type { RecipeIngredient } from './RecipeIngredient';
import type { RecipeNote } from './RecipeNote';
import type { RecipeSettings } from './RecipeSettings';
import type { RecipeStep } from './RecipeStep';

export type Recipe = {
    id?: number;
    name?: string;
    slug?: string;
    image?: any;
    description?: string;
    recipeCategory?: Array<string>;
    tags?: Array<string>;
    rating?: number;
    dateAdded?: string;
    dateUpdated?: string;
    recipeYield?: string;
    recipeIngredient?: Array<RecipeIngredient>;
    recipeInstructions?: Array<RecipeStep>;
    nutrition?: Nutrition;
    tools?: Array<string>;
    totalTime?: string;
    prepTime?: string;
    performTime?: string;
    settings?: RecipeSettings;
    assets?: Array<RecipeAsset>;
    notes?: Array<RecipeNote>;
    orgURL?: string;
    extras?: any;
    comments?: Array<CommentOut>;
};

