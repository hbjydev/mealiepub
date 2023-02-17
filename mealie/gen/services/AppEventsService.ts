/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventNotificationIn } from '../models/EventNotificationIn';
import type { EventNotificationOut } from '../models/EventNotificationOut';
import type { EventsOut } from '../models/EventsOut';
import type { TestEvent } from '../models/TestEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppEventsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Events
     * Get event from the Database
     * @returns EventsOut Successful Response
     * @throws ApiError
     */
    public getEventsApiAboutEventsGet(): CancelablePromise<EventsOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/about/events',
        });
    }

    /**
     * Delete Events
     * Get event from the Database
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteEventsApiAboutEventsDelete(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/about/events',
        });
    }

    /**
     * Delete Event
     * Delete event from the Database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteEventApiAboutEventsIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/about/events/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get All Event Notification
     * Get all event_notification from the Database
     * @returns EventNotificationOut Successful Response
     * @throws ApiError
     */
    public getAllEventNotificationApiAboutEventsNotificationsGet(): CancelablePromise<Array<EventNotificationOut>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/about/events/notifications',
        });
    }

    /**
     * Create Event Notification
     * Create event_notification in the Database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createEventNotificationApiAboutEventsNotificationsPost(
        requestBody: EventNotificationIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/about/events/notifications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Test Notification Route
     * Create event_notification in the Database
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public testNotificationRouteApiAboutEventsNotificationsTestPost(
        requestBody: TestEvent,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/about/events/notifications/test',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Event Notification
     * Update event_notification in the Database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateEventNotificationApiAboutEventsNotificationsIdPut(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/about/events/notifications/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Event Notification
     * Delete event_notification from the Database
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteEventNotificationApiAboutEventsNotificationsIdDelete(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/about/events/notifications/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
