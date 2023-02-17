/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_upload_nextcloud_zipfile_api_migrations__import_type__upload_post } from '../models/Body_upload_nextcloud_zipfile_api_migrations__import_type__upload_post';
import type { Migration } from '../models/Migration';
import type { Migrations } from '../models/Migrations';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MigrationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Migration Options
     * Returns a list of avaiable directories that can be imported into Mealie
     * @returns Migrations Successful Response
     * @throws ApiError
     */
    public getAllMigrationOptionsApiMigrationsGet(): CancelablePromise<Array<Migrations>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/migrations',
        });
    }

    /**
     * Import Migration
     * Imports all the recipes in a given directory
     * @param importType
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public importMigrationApiMigrationsImportTypeFileNameImportPost(
        importType: Migration,
        fileName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/migrations/{import_type}/{file_name}/import',
            path: {
                'import_type': importType,
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Migration Data
     * Removes migration data from the file system
     * @param importType
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteMigrationDataApiMigrationsImportTypeFileNameDeleteDelete(
        importType: Migration,
        fileName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/migrations/{import_type}/{file_name}/delete',
            path: {
                'import_type': importType,
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Nextcloud Zipfile
     * Upload a .zip File to later be imported into Mealie
     * @param importType
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public uploadNextcloudZipfileApiMigrationsImportTypeUploadPost(
        importType: Migration,
        formData: Body_upload_nextcloud_zipfile_api_migrations__import_type__upload_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/migrations/{import_type}/upload',
            path: {
                'import_type': importType,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
