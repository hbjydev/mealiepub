/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecipeSummary } from '../models/RecipeSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QueryAllRecipesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Recipe Summary
     * Returns key the recipe summary data for recipes in the database. You can perform
     * slice operations to set the skip/end amounts for recipes. All recipes are sorted by the added date.
     *
     * **Query Parameters**
     * - skip: The database entry to start at. (0 Indexed)
     * - end: The number of entries to return.
     *
     * skip=2, end=10 will return entries
     * @param start
     * @param limit
     * @returns RecipeSummary Successful Response
     * @throws ApiError
     */
    public getRecipeSummaryApiRecipesSummaryGet(
        start?: any,
        limit?: any,
    ): CancelablePromise<Array<RecipeSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/recipes/summary',
            query: {
                'start': start,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Untagged Recipes
     * @param count
     * @returns RecipeSummary Successful Response
     * @throws ApiError
     */
    public getUntaggedRecipesApiRecipesSummaryUntaggedGet(
        count: boolean = false,
    ): CancelablePromise<Array<RecipeSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/recipes/summary/untagged',
            query: {
                'count': count,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Uncategorized Recipes
     * @param count
     * @returns RecipeSummary Successful Response
     * @throws ApiError
     */
    public getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(
        count: boolean = false,
    ): CancelablePromise<Array<RecipeSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/recipes/summary/uncategorized',
            query: {
                'count': count,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * @deprecated
     * Filter By Category
     * pass a list of categories and get a list of recipes associated with those categories
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public filterByCategoryApiRecipesCategoryPost(
        requestBody: Array<any>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/category',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * @deprecated
     * Filter By Tags
     * pass a list of tags and get a list of recipes associated with those tags
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public filterByTagsApiRecipesTagPost(
        requestBody: Array<any>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/tag',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
