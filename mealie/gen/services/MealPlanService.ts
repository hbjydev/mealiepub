/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MealPlanIn } from '../models/MealPlanIn';
import type { MealPlanOut } from '../models/MealPlanOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MealPlanService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Meals
     * Returns a list of all available Meal Plan
     * @returns MealPlanOut Successful Response
     * @throws ApiError
     */
    public getAllMealsApiMealPlansAllGet(): CancelablePromise<Array<MealPlanOut>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/all',
        });
    }

    /**
     * Get This Week
     * Returns the meal plan data for this week
     * @returns MealPlanOut Successful Response
     * @throws ApiError
     */
    public getThisWeekApiMealPlansThisWeekGet(): CancelablePromise<MealPlanOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/this-week',
        });
    }

    /**
     * Get Today
     * Returns the recipe slug for the meal scheduled for today.
     * If no meal is scheduled nothing is returned
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTodayApiMealPlansTodayGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/today',
        });
    }

    /**
     * Get Meal Plan
     * Returns a single Meal Plan from the Database
     * @param id
     * @returns MealPlanOut Successful Response
     * @throws ApiError
     */
    public getMealPlanApiMealPlansIdGet(
        id: any,
    ): CancelablePromise<MealPlanOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Meal Plan
     * Creates a meal plan database entry
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createMealPlanApiMealPlansCreatePost(
        requestBody: MealPlanIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/meal-plans/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Meal Plan
     * Updates a meal plan based off ID
     * @param planId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public updateMealPlanApiMealPlansPlanIdPut(
        planId: string,
        requestBody: MealPlanIn,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/meal-plans/{plan_id}',
            path: {
                'plan_id': planId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Meal Plan
     * Removes a meal plan from the database
     * @param planId
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteMealPlanApiMealPlansPlanIdDelete(
        planId: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/meal-plans/{plan_id}',
            path: {
                'plan_id': planId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Todays Image
     * Returns the image for todays meal-plan.
     * @param groupName
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTodaysImageApiMealPlansTodayImageGet(
        groupName: string = 'Home',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/today/image',
            query: {
                'group_name': groupName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Shopping List
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public getShoppingListApiMealPlansIdShoppingListGet(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/meal-plans/{id}/shopping-list',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
