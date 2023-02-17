/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryBase } from './CategoryBase';
import type { MealPlanOut } from './MealPlanOut';
import type { ShoppingListOut } from './ShoppingListOut';
import type { UserOut } from './UserOut';

export type GroupInDB = {
    name: string;
    id: number;
    categories?: Array<CategoryBase>;
    webhookUrls?: Array<string>;
    webhookTime?: string;
    webhookEnable: boolean;
    users?: Array<UserOut>;
    mealplans?: Array<MealPlanOut>;
    shoppingLists?: Array<ShoppingListOut>;
};

