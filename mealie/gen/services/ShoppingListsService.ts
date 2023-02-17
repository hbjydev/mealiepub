/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShoppingListIn } from '../models/ShoppingListIn';
import type { ShoppingListOut } from '../models/ShoppingListOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ShoppingListsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Shopping List
     * Create Shopping List in the Database
     * @param requestBody
     * @returns ShoppingListOut Successful Response
     * @throws ApiError
     */
    public createShoppingListApiShoppingListsPost(
        requestBody: ShoppingListIn,
    ): CancelablePromise<ShoppingListOut> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/shopping-lists',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Shopping List
     * Get Shopping List from the Database
     * @param id
     * @returns ShoppingListOut Successful Response
     * @throws ApiError
     */
    public getShoppingListApiShoppingListsIdGet(
        id: number,
    ): CancelablePromise<ShoppingListOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/shopping-lists/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Shopping List
     * Update Shopping List in the Database
     * @param id
     * @param requestBody
     * @returns ShoppingListOut Successful Response
     * @throws ApiError
     */
    public updateShoppingListApiShoppingListsIdPut(
        id: number,
        requestBody: ShoppingListIn,
    ): CancelablePromise<ShoppingListOut> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/shopping-lists/{id}',
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
     * Delete Shopping List
     * Delete Shopping List from the Database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteShoppingListApiShoppingListsIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/shopping-lists/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
