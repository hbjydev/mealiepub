/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_recipe_from_zip_api_recipes_create_from_zip_post } from '../models/Body_create_recipe_from_zip_api_recipes_create_from_zip_post';
import type { Body_update_recipe_image_api_recipes__recipe_slug__image_put } from '../models/Body_update_recipe_image_api_recipes__recipe_slug__image_put';
import type { Body_upload_recipe_asset_api_recipes__recipe_slug__assets_post } from '../models/Body_upload_recipe_asset_api_recipes__recipe_slug__assets_post';
import type { Recipe } from '../models/Recipe';
import type { RecipeAsset } from '../models/RecipeAsset';
import type { RecipeURLIn } from '../models/RecipeURLIn';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RecipeCrudService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Recipe
     * Takes in a recipe slug, returns all data for a recipe
     * @param recipeSlug
     * @returns Recipe Successful Response
     * @throws ApiError
     */
    public getRecipeApiRecipesRecipeSlugGet(
        recipeSlug: string,
    ): CancelablePromise<Recipe> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/recipes/{recipe_slug}',
            path: {
                'recipe_slug': recipeSlug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Recipe
     * Updates a recipe by existing slug and data.
     * @param recipeSlug
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateRecipeApiRecipesRecipeSlugPut(
        recipeSlug: string,
        requestBody: Recipe,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/recipes/{recipe_slug}',
            path: {
                'recipe_slug': recipeSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Recipe
     * Deletes a recipe by slug
     * @param recipeSlug
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteRecipeApiRecipesRecipeSlugDelete(
        recipeSlug: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/recipes/{recipe_slug}',
            path: {
                'recipe_slug': recipeSlug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Patch Recipe
     * Updates a recipe by existing slug and data.
     * @param recipeSlug
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public patchRecipeApiRecipesRecipeSlugPatch(
        recipeSlug: string,
        requestBody: Recipe,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/recipes/{recipe_slug}',
            path: {
                'recipe_slug': recipeSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Recipe As Zip
     * Get a Recipe and It's Original Image as a Zip File
     * @param recipeSlug
     * @returns any Successful Response
     * @throws ApiError
     */
    public getRecipeAsZipApiRecipesRecipeSlugZipGet(
        recipeSlug: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/recipes/{recipe_slug}/zip',
            path: {
                'recipe_slug': recipeSlug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create From Json
     * Takes in a JSON string and loads data into the database as a new entry
     * @param requestBody
     * @returns string Successful Response
     * @throws ApiError
     */
    public createFromJsonApiRecipesCreatePost(
        requestBody: Recipe,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Test Parse Recipe Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public testParseRecipeUrlApiRecipesTestScrapeUrlPost(
        requestBody: RecipeURLIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/test-scrape-url',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Parse Recipe Url
     * Takes in a URL and attempts to scrape data and load it into the database
     * @param requestBody
     * @returns string Successful Response
     * @throws ApiError
     */
    public parseRecipeUrlApiRecipesCreateUrlPost(
        requestBody: RecipeURLIn,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/create-url',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Recipe From Zip
     * Create recipe from archive
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public createRecipeFromZipApiRecipesCreateFromZipPost(
        formData: Body_create_recipe_from_zip_api_recipes_create_from_zip_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/create-from-zip',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Recipe Image
     * Removes an existing image and replaces it with the incoming file.
     * @param recipeSlug
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateRecipeImageApiRecipesRecipeSlugImagePut(
        recipeSlug: string,
        formData: Body_update_recipe_image_api_recipes__recipe_slug__image_put,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/recipes/{recipe_slug}/image',
            path: {
                'recipe_slug': recipeSlug,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Scrape Image Url
     * Removes an existing image and replaces it with the incoming file.
     * @param recipeSlug
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public scrapeImageUrlApiRecipesRecipeSlugImagePost(
        recipeSlug: string,
        requestBody: RecipeURLIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/{recipe_slug}/image',
            path: {
                'recipe_slug': recipeSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Recipe Asset
     * Upload a file to store as a recipe asset
     * @param recipeSlug
     * @param formData
     * @returns RecipeAsset Successful Response
     * @throws ApiError
     */
    public uploadRecipeAssetApiRecipesRecipeSlugAssetsPost(
        recipeSlug: string,
        formData: Body_upload_recipe_asset_api_recipes__recipe_slug__assets_post,
    ): CancelablePromise<RecipeAsset> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/{recipe_slug}/assets',
            path: {
                'recipe_slug': recipeSlug,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
