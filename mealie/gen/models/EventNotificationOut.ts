/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeclaredTypes } from './DeclaredTypes';

export type EventNotificationOut = {
    id?: number;
    name?: string;
    type?: DeclaredTypes;
    general?: boolean;
    recipe?: boolean;
    backup?: boolean;
    scheduled?: boolean;
    migration?: boolean;
    group?: boolean;
    user?: boolean;
};

