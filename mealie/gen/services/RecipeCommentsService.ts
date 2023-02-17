/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentIn } from '../models/CommentIn';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RecipeCommentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Comment
     * Create comment in the Database
     * @param slug
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createCommentApiRecipesSlugCommentsPost(
        slug: string,
        requestBody: CommentIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/recipes/{slug}/comments',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Comment
     * Update comment in the Database
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateCommentApiRecipesSlugCommentsIdPut(
        id: number,
        requestBody: CommentIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/recipes/{slug}/comments/{id}',
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
     * Delete Comment
     * Delete comment from the Database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteCommentApiRecipesSlugCommentsIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/recipes/{slug}/comments/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
