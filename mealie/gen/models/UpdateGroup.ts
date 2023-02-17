/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryBase } from './CategoryBase';

export type UpdateGroup = {
    name: string;
    id: number;
    categories?: Array<CategoryBase>;
    webhookUrls?: Array<string>;
    webhookTime?: string;
    webhookEnable: boolean;
};

