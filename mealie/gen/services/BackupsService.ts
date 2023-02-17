/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackupJob } from '../models/BackupJob';
import type { Body_upload_backup_file_api_backups_upload_post } from '../models/Body_upload_backup_file_api_backups_upload_post';
import type { ImportJob } from '../models/ImportJob';
import type { Imports } from '../models/Imports';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BackupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Available Imports
     * Returns a list of avaiable .zip files for import into Mealie.
     * @returns Imports Successful Response
     * @throws ApiError
     */
    public availableImportsApiBackupsAvailableGet(): CancelablePromise<Imports> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/backups/available',
        });
    }

    /**
     * Export Database
     * Generates a backup of the recipe database in json format.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public exportDatabaseApiBackupsExportDatabasePost(
        requestBody: BackupJob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/backups/export/database',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Backup File
     * Upload a .zip File to later be imported into Mealie
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public uploadBackupFileApiBackupsUploadPost(
        formData: Body_upload_backup_file_api_backups_upload_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/backups/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Download Backup File
     * Returns a token to download a file
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadBackupFileApiBackupsFileNameDownloadGet(
        fileName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/backups/{file_name}/download',
            path: {
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Import Database
     * Import a database backup file generated from Mealie.
     * @param fileName
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public importDatabaseApiBackupsFileNameImportPost(
        fileName: string,
        requestBody: ImportJob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/backups/{file_name}/import',
            path: {
                'file_name': fileName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Backup
     * Removes a database backup from the file system
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteBackupApiBackupsFileNameDeleteDelete(
        fileName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/backups/{file_name}/delete',
            path: {
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
