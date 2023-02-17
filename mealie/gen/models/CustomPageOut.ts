/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecipeCategoryResponse } from './RecipeCategoryResponse';

export type CustomPageOut = {
    name: string;
    slug?: string;
    position: number;
    categories?: Array<RecipeCategoryResponse>;
    id: number;
};

