/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupBase } from '../models/GroupBase';
import type { GroupInDB } from '../models/GroupInDB';
import type { UpdateGroup } from '../models/UpdateGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupsAdministrationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Groups
     * Returns a list of all groups in the database
     * @returns GroupInDB Successful Response
     * @throws ApiError
     */
    public getAllGroupsApiGroupsGet(): CancelablePromise<Array<GroupInDB>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/groups',
        });
    }

    /**
     * Create Group
     * Creates a Group in the Database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createGroupApiGroupsPost(
        requestBody: GroupBase,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/groups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Group Data
     * Updates a User Group
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateGroupDataApiGroupsIdPut(
        id: number,
        requestBody: UpdateGroup,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/groups/{id}',
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
     * Delete User Group
     * Removes a user group from the database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteUserGroupApiGroupsIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
