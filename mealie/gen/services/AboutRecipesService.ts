/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AboutRecipesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Recipe Settings Defaults
     * Returns the Default Settings for Recieps as set by ENV variables
     * @returns any Successful Response
     * @throws ApiError
     */
    public getRecipeSettingsDefaultsApiAboutRecipesDefaultsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/about/recipes/defaults',
        });
    }

}
