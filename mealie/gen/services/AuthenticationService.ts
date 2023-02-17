/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_get_token_api_auth_token_long_post } from '../models/Body_get_token_api_auth_token_long_post';
import type { Body_get_token_api_auth_token_post } from '../models/Body_get_token_api_auth_token_post';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthenticationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Token
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTokenApiAuthTokenPost(
        formData: Body_get_token_api_auth_token_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Token
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTokenApiAuthTokenLongPost(
        formData: Body_get_token_api_auth_token_long_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/token/long',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Refresh Token
     * Use a valid token to get another token
     * @returns any Successful Response
     * @throws ApiError
     */
    public refreshTokenApiAuthRefreshGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auth/refresh',
        });
    }

}
