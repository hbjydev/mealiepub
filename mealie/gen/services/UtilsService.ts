/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UtilsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Download File
     * Uses a file token obtained by an active user to retrieve a file from the operating
     * system.
     * @param token
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadFileApiUtilsDownloadGet(
        token?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/utils/download',
            query: {
                'token': token,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
