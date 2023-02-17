/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MealDayIn } from './MealDayIn';

export type MealPlanOut = {
    group: string;
    startDate: string;
    endDate: string;
    planDays: Array<MealDayIn>;
    uid: number;
    shoppingList?: number;
};

