/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryIn } from '../models/CategoryIn';
import type { RecipeCategoryResponse } from '../models/RecipeCategoryResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RecipeCategoriesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Recipe Categories
     * Returns a list of available categories in the database
     * @returns any Successful Response
     * @throws ApiError
     */
    public getAllRecipeCategoriesApiCategoriesGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories',
        });
    }

    /**
     * Create Recipe Category
     * Creates a Category in the database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createRecipeCategoryApiCategoriesPost(
        requestBody: CategoryIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Empty Categories
     * Returns a list of categories that do not contain any recipes
     * @returns any Successful Response
     * @throws ApiError
     */
    public getEmptyCategoriesApiCategoriesEmptyGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories/empty',
        });
    }

    /**
     * Get All Recipes By Category
     * Returns a list of recipes associated with the provided category.
     * @param category
     * @returns RecipeCategoryResponse Successful Response
     * @throws ApiError
     */
    public getAllRecipesByCategoryApiCategoriesCategoryGet(
        category: string,
    ): CancelablePromise<RecipeCategoryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories/{category}',
            path: {
                'category': category,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Recipe Category
     * Updates an existing Tag in the database
     * @param category
     * @param requestBody
     * @returns RecipeCategoryResponse Successful Response
     * @throws ApiError
     */
    public updateRecipeCategoryApiCategoriesCategoryPut(
        category: string,
        requestBody: CategoryIn,
    ): CancelablePromise<RecipeCategoryResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/categories/{category}',
            path: {
                'category': category,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Recipe Category
     * Removes a recipe category from the database. Deleting a
     * category does not impact a recipe. The category will be removed
     * from any recipes that contain it
     * @param category
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteRecipeCategoryApiCategoriesCategoryDelete(
        category: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/categories/{category}',
            path: {
                'category': category,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
