/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserIn = {
    username?: string;
    fullName?: string;
    email: string;
    admin: boolean;
    group?: string;
    favoriteRecipes?: Array<string>;
    password: string;
};

