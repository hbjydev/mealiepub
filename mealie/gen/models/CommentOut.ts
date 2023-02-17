/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { mealie__schema__comments__UserBase } from './mealie__schema__comments__UserBase';

export type CommentOut = {
    text: string;
    id: number;
    uuid: string;
    recipeSlug: string;
    dateAdded: string;
    user: mealie__schema__comments__UserBase;
};

