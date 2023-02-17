/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BackupOptions } from './BackupOptions';

export type BackupJob = {
    tag?: string;
    options: BackupOptions;
    templates?: Array<string>;
};

