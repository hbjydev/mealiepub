/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventCategory } from './EventCategory';

export type Event = {
    id?: number;
    title: string;
    text: string;
    timeStamp?: string;
    category?: EventCategory;
};

