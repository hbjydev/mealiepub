/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SiteTheme } from '../models/SiteTheme';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Themes
     * Returns all site themes
     * @returns any Successful Response
     * @throws ApiError
     */
    public getAllThemesApiThemesGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/themes',
        });
    }

    /**
     * Get Single Theme
     * Returns a named theme
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public getSingleThemeApiThemesIdGet(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/themes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Theme
     * Update a theme database entry
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateThemeApiThemesIdPut(
        id: number,
        requestBody: SiteTheme,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/themes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Theme
     * Deletes theme from the database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteThemeApiThemesIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/themes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Theme
     * Creates a site color theme database entry
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createThemeApiThemesCreatePost(
        requestBody: SiteTheme,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/themes/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
