/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoingLiveTokenIn } from '../models/LoingLiveTokenIn';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserApiTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Api Token
     * Create api_token in the Database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createApiTokenApiUsersApiTokensPost(
        requestBody: LoingLiveTokenIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/api-tokens',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Api Token
     * Delete api_token from the Database
     * @param tokenId
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteApiTokenApiUsersApiTokensTokenIdDelete(
        tokenId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/api-tokens/{token_id}',
            path: {
                'token_id': tokenId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
