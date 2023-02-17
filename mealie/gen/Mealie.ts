/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AboutRecipesService } from './services/AboutRecipesService';
import { AppEventsService } from './services/AppEventsService';
import { AuthenticationService } from './services/AuthenticationService';
import { BackupsService } from './services/BackupsService';
import { DebugService } from './services/DebugService';
import { GroupsService } from './services/GroupsService';
import { GroupsAdministrationService } from './services/GroupsAdministrationService';
import { MealPlanService } from './services/MealPlanService';
import { MigrationService } from './services/MigrationService';
import { QueryAllRecipesService } from './services/QueryAllRecipesService';
import { RecipeCategoriesService } from './services/RecipeCategoriesService';
import { RecipeCommentsService } from './services/RecipeCommentsService';
import { RecipeCrudService } from './services/RecipeCrudService';
import { RecipeTagsService } from './services/RecipeTagsService';
import { SettingsService } from './services/SettingsService';
import { ShoppingListsService } from './services/ShoppingListsService';
import { SiteMediaService } from './services/SiteMediaService';
import { ThemesService } from './services/ThemesService';
import { UserApiTokensService } from './services/UserApiTokensService';
import { UsersService } from './services/UsersService';
import { UserSignupService } from './services/UserSignupService';
import { UtilsService } from './services/UtilsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Mealie {

    public readonly aboutRecipes: AboutRecipesService;
    public readonly appEvents: AppEventsService;
    public readonly authentication: AuthenticationService;
    public readonly backups: BackupsService;
    public readonly debug: DebugService;
    public readonly groups: GroupsService;
    public readonly groupsAdministration: GroupsAdministrationService;
    public readonly mealPlan: MealPlanService;
    public readonly migration: MigrationService;
    public readonly queryAllRecipes: QueryAllRecipesService;
    public readonly recipeCategories: RecipeCategoriesService;
    public readonly recipeComments: RecipeCommentsService;
    public readonly recipeCrud: RecipeCrudService;
    public readonly recipeTags: RecipeTagsService;
    public readonly settings: SettingsService;
    public readonly shoppingLists: ShoppingListsService;
    public readonly siteMedia: SiteMediaService;
    public readonly themes: ThemesService;
    public readonly userApiTokens: UserApiTokensService;
    public readonly users: UsersService;
    public readonly userSignup: UserSignupService;
    public readonly utils: UtilsService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.5.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.aboutRecipes = new AboutRecipesService(this.request);
        this.appEvents = new AppEventsService(this.request);
        this.authentication = new AuthenticationService(this.request);
        this.backups = new BackupsService(this.request);
        this.debug = new DebugService(this.request);
        this.groups = new GroupsService(this.request);
        this.groupsAdministration = new GroupsAdministrationService(this.request);
        this.mealPlan = new MealPlanService(this.request);
        this.migration = new MigrationService(this.request);
        this.queryAllRecipes = new QueryAllRecipesService(this.request);
        this.recipeCategories = new RecipeCategoriesService(this.request);
        this.recipeComments = new RecipeCommentsService(this.request);
        this.recipeCrud = new RecipeCrudService(this.request);
        this.recipeTags = new RecipeTagsService(this.request);
        this.settings = new SettingsService(this.request);
        this.shoppingLists = new ShoppingListsService(this.request);
        this.siteMedia = new SiteMediaService(this.request);
        this.themes = new ThemesService(this.request);
        this.userApiTokens = new UserApiTokensService(this.request);
        this.users = new UsersService(this.request);
        this.userSignup = new UserSignupService(this.request);
        this.utils = new UtilsService(this.request);
    }
}

