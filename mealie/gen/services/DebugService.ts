/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DebugService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Mealie Version
     * Returns the current version of mealie
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMealieVersionApiDebugVersionGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug/version',
        });
    }

    /**
     * Get Debug Info
     * Returns general information about the application for debugging
     * @returns any Successful Response
     * @throws ApiError
     */
    public getDebugInfoApiDebugGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug',
        });
    }

    /**
     * Get App Statistics
     * @returns any Successful Response
     * @throws ApiError
     */
    public getAppStatisticsApiDebugStatisticsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug/statistics',
        });
    }

    /**
     * Get Last Recipe Json
     * Returns a token to download a file
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLastRecipeJsonApiDebugLastRecipeJsonGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug/last-recipe-json',
        });
    }

    /**
     * Get Log
     * Doc Str
     * @param num
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLogApiDebugLogNumGet(
        num: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug/log/{num}',
            path: {
                'num': num,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Log File
     * Returns a token to download a file
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLogFileApiDebugLogGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/debug/log',
        });
    }

}
