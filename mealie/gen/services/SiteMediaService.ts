/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageType } from '../models/ImageType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SiteMediaService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Recipe Img
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image
     * and should not hit the API in production
     * @param recipeSlug
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public getRecipeImgApiMediaRecipesRecipeSlugImagesFileNameGet(
        recipeSlug: string,
        fileName: ImageType,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/media/recipes/{recipe_slug}/images/{file_name}',
            path: {
                'recipe_slug': recipeSlug,
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Recipe Asset
     * Returns a recipe asset
     * @param recipeSlug
     * @param fileName
     * @returns any Successful Response
     * @throws ApiError
     */
    public getRecipeAssetApiMediaRecipesRecipeSlugAssetsFileNameGet(
        recipeSlug: string,
        fileName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/media/recipes/{recipe_slug}/assets/{file_name}',
            path: {
                'recipe_slug': recipeSlug,
                'file_name': fileName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
