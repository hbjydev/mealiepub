/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignUpIn } from '../models/SignUpIn';
import type { SignUpOut } from '../models/SignUpOut';
import type { SignUpToken } from '../models/SignUpToken';
import type { UserIn } from '../models/UserIn';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserSignupService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create User With Token
     * Creates a user with a valid sign up token
     * @param token
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createUserWithTokenApiUsersSignUpsTokenPost(
        token: string,
        requestBody: UserIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/sign-ups/{token}',
            path: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Token
     * Removed a token from the database
     * @param token
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteTokenApiUsersSignUpsTokenDelete(
        token: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/sign-ups/{token}',
            path: {
                'token': token,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get All Open Sign Ups
     * Returns a list of open sign up links
     * @returns SignUpOut Successful Response
     * @throws ApiError
     */
    public getAllOpenSignUpsApiUsersSignUpsGet(): CancelablePromise<Array<SignUpOut>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/sign-ups',
        });
    }

    /**
     * Create User Sign Up Key
     * Generates a Random Token that a new user can sign up with
     * @param requestBody
     * @returns SignUpToken Successful Response
     * @throws ApiError
     */
    public createUserSignUpKeyApiUsersSignUpsPost(
        requestBody: SignUpIn,
    ): CancelablePromise<SignUpToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/sign-ups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
