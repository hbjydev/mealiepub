/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomPageBase } from '../models/CustomPageBase';
import type { CustomPageOut } from '../models/CustomPageOut';
import type { SiteSettings } from '../models/SiteSettings';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Custom Pages
     * Returns the sites custom pages
     * @returns any Successful Response
     * @throws ApiError
     */
    public getCustomPagesApiSiteSettingsCustomPagesGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/site-settings/custom-pages',
        });
    }

    /**
     * Update Multiple Pages
     * Update multiple custom pages
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateMultiplePagesApiSiteSettingsCustomPagesPut(
        requestBody: Array<CustomPageOut>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/site-settings/custom-pages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create New Page
     * Creates a new Custom Page
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createNewPageApiSiteSettingsCustomPagesPost(
        requestBody: CustomPageBase,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/site-settings/custom-pages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Single Page
     * Removes a custom page from the database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public getSinglePageApiSiteSettingsCustomPagesIdGet(
        id: (number | string),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/site-settings/custom-pages/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Single Page
     * Removes a custom page from the database
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateSinglePageApiSiteSettingsCustomPagesIdPut(
        id: number,
        requestBody: CustomPageOut,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/site-settings/custom-pages/{id}',
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
     * Delete Custom Page
     * Removes a custom page from the database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteCustomPageApiSiteSettingsCustomPagesIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/site-settings/custom-pages/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Main Settings
     * Returns basic site settings
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMainSettingsApiSiteSettingsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/site-settings',
        });
    }

    /**
     * Update Settings
     * Returns Site Settings
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateSettingsApiSiteSettingsPut(
        requestBody: SiteSettings,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/site-settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Test Webhooks
     * Run the function to test your webhooks
     * @returns any Successful Response
     * @throws ApiError
     */
    public testWebhooksApiSiteSettingsWebhooksTestPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/site-settings/webhooks/test',
        });
    }

}
