/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecipeTagResponse } from '../models/RecipeTagResponse';
import type { TagIn } from '../models/TagIn';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RecipeTagsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Recipes By Tag
     * Returns a list of recipes associated with the provided tag.
     * @param tag
     * @returns RecipeTagResponse Successful Response
     * @throws ApiError
     */
    public getAllRecipesByTagApiTagsTagGet(
        tag: string,
    ): CancelablePromise<RecipeTagResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tags/{tag}',
            path: {
                'tag': tag,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Recipe Tag
     * Updates an existing Tag in the database
     * @param tag
     * @param requestBody
     * @returns RecipeTagResponse Successful Response
     * @throws ApiError
     */
    public updateRecipeTagApiTagsTagPut(
        tag: string,
        requestBody: TagIn,
    ): CancelablePromise<RecipeTagResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/tags/{tag}',
            path: {
                'tag': tag,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Recipe Tag
     * Removes a recipe tag from the database. Deleting a
     * tag does not impact a recipe. The tag will be removed
     * from any recipes that contain it
     * @param tag
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteRecipeTagApiTagsTagDelete(
        tag: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/tags/{tag}',
            path: {
                'tag': tag,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get All Recipe Tags
     * Returns a list of available tags in the database
     * @returns any Successful Response
     * @throws ApiError
     */
    public getAllRecipeTagsApiTagsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tags',
        });
    }

    /**
     * Create Recipe Tag
     * Creates a Tag in the database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createRecipeTagApiTagsPost(
        requestBody: TagIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/tags',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Empty Tags
     * Returns a list of tags that do not contain any recipes
     * @returns any Successful Response
     * @throws ApiError
     */
    public getEmptyTagsApiTagsEmptyGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tags/empty',
        });
    }

}
