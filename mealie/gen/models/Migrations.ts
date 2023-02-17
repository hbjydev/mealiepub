/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MigrationFile } from './MigrationFile';

export type Migrations = {
    type: string;
    files?: Array<MigrationFile>;
};

