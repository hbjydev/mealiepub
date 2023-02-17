/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryBase } from './CategoryBase';

export type SiteSettings = {
    language?: string;
    firstDayOfWeek?: number;
    showRecent?: boolean;
    cardsPerSection?: number;
    categories?: Array<CategoryBase>;
};

