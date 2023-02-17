/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MealDayIn } from './MealDayIn';

export type MealPlanIn = {
    group: string;
    startDate: string;
    endDate: string;
    planDays: Array<MealDayIn>;
};

