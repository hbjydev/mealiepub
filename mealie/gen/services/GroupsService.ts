/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupInDB } from '../models/GroupInDB';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Current User Group
     * Returns the Group Data for the Current User
     * @returns GroupInDB Successful Response
     * @throws ApiError
     */
    public getCurrentUserGroupApiGroupsSelfGet(): CancelablePromise<GroupInDB> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/groups/self',
        });
    }

}
