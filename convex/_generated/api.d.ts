/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as applications from "../applications.js";
import type * as auditLogs from "../auditLogs.js";
import type * as auth from "../auth.js";
import type * as authHelpers from "../authHelpers.js";
import type * as authLocal from "../authLocal.js";
import type * as broadcasts from "../broadcasts.js";
import type * as contributions from "../contributions.js";
import type * as functions_loans_submitApplication from "../functions/loans/submitApplication.js";
import type * as functions_memberDashboard_getMemberDashboard from "../functions/memberDashboard/getMemberDashboard.js";
import type * as http from "../http.js";
import type * as loans from "../loans.js";
import type * as members from "../members.js";
import type * as products from "../products.js";
import type * as reports from "../reports.js";
import type * as settings from "../settings.js";
import type * as transactions from "../transactions.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  applications: typeof applications;
  auditLogs: typeof auditLogs;
  auth: typeof auth;
  authHelpers: typeof authHelpers;
  authLocal: typeof authLocal;
  broadcasts: typeof broadcasts;
  contributions: typeof contributions;
  "functions/loans/submitApplication": typeof functions_loans_submitApplication;
  "functions/memberDashboard/getMemberDashboard": typeof functions_memberDashboard_getMemberDashboard;
  http: typeof http;
  loans: typeof loans;
  members: typeof members;
  products: typeof products;
  reports: typeof reports;
  settings: typeof settings;
  transactions: typeof transactions;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
