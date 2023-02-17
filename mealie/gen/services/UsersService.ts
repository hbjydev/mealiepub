/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_update_user_image_api_users__id__image_post } from '../models/Body_update_user_image_api_users__id__image_post';
import type { ChangePassword } from '../models/ChangePassword';
import type { mealie__schema__user__UserBase } from '../models/mealie__schema__user__UserBase';
import type { UserFavorites } from '../models/UserFavorites';
import type { UserIn } from '../models/UserIn';
import type { UserOut } from '../models/UserOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get User Image
     * Returns a users profile picture
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public getUserImageApiUsersIdImageGet(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}/image',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update User Image
     * Updates a User Image
     * @param id
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateUserImageApiUsersIdImagePost(
        id: string,
        formData: Body_update_user_image_api_users__id__image_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{id}/image',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Logged In User
     * @returns UserOut Successful Response
     * @throws ApiError
     */
    public getLoggedInUserApiUsersSelfGet(): CancelablePromise<UserOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/self',
        });
    }

    /**
     * Reset User Password
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public resetUserPasswordApiUsersIdResetPasswordPut(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/users/{id}/reset-password',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get User By Id
     * @param id
     * @returns UserOut Successful Response
     * @throws ApiError
     */
    public getUserByIdApiUsersIdGet(
        id: number,
    ): CancelablePromise<UserOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update User
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateUserApiUsersIdPut(
        id: number,
        requestBody: mealie__schema__user__UserBase,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/users/{id}',
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
     * Delete User
     * Removes a user from the database. Must be the current user or a super user
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteUserApiUsersIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Password
     * Resets the User Password
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updatePasswordApiUsersIdPasswordPut(
        id: number,
        requestBody: ChangePassword,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/users/{id}/password',
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
     * Get Favorites
     * Get user's favorite recipes
     * @param id
     * @returns UserFavorites Successful Response
     * @throws ApiError
     */
    public getFavoritesApiUsersIdFavoritesGet(
        id: string,
    ): CancelablePromise<UserFavorites> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}/favorites',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Add Favorite
     * Adds a Recipe to the users favorites
     * @param slug
     * @returns any Successful Response
     * @throws ApiError
     */
    public addFavoriteApiUsersIdFavoritesSlugPost(
        slug: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{id}/favorites/{slug}',
            path: {
                'slug': slug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Remove Favorite
     * Adds a Recipe to the users favorites
     * @param slug
     * @returns any Successful Response
     * @throws ApiError
     */
    public removeFavoriteApiUsersIdFavoritesSlugDelete(
        slug: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/{id}/favorites/{slug}',
            path: {
                'slug': slug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get All Users
     * @returns UserOut Successful Response
     * @throws ApiError
     */
    public getAllUsersApiUsersGet(): CancelablePromise<Array<UserOut>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users',
        });
    }

    /**
     * Create User
     * @param requestBody
     * @returns UserOut Successful Response
     * @throws ApiError
     */
    public createUserApiUsersPost(
        requestBody: UserIn,
    ): CancelablePromise<UserOut> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
