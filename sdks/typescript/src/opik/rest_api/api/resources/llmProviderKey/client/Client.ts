/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as OpikApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace LlmProviderKey {
    export interface Options {
        environment?: core.Supplier<environments.OpikApiEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        /** Override the Authorization header */
        apiKey?: core.Supplier<string | undefined>;
        /** Override the Comet-Workspace header */
        workspaceName?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Authorization header */
        apiKey?: string | undefined;
        /** Override the Comet-Workspace header */
        workspaceName?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * LLM Provider Key
 */
export class LlmProviderKey {
    constructor(protected readonly _options: LlmProviderKey.Options = {}) {}

    /**
     * Delete LLM Provider's ApiKeys batch
     *
     * @param {OpikApi.BatchDelete} request
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.llmProviderKey.deleteLlmProviderApiKeysBatch({
     *         ids: ["ids"]
     *     })
     */
    public deleteLlmProviderApiKeysBatch(
        request: OpikApi.BatchDelete,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteLlmProviderApiKeysBatch(request, requestOptions));
    }

    private async __deleteLlmProviderApiKeysBatch(
        request: OpikApi.BatchDelete,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpikApiEnvironment.Default,
                "v1/private/llm-provider-key/delete",
            ),
            method: "POST",
            headers: {
                "Comet-Workspace":
                    (await core.Supplier.get(this._options.workspaceName)) != null
                        ? await core.Supplier.get(this._options.workspaceName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BatchDelete.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.OpikApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpikApiTimeoutError(
                    "Timeout exceeded when calling POST /v1/private/llm-provider-key/delete.",
                );
            case "unknown":
                throw new errors.OpikApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Find LLM Provider's ApiKeys
     *
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.llmProviderKey.findLlmProviderKeys()
     */
    public findLlmProviderKeys(
        requestOptions?: LlmProviderKey.RequestOptions,
    ): core.HttpResponsePromise<OpikApi.ProviderApiKeyPagePublic> {
        return core.HttpResponsePromise.fromPromise(this.__findLlmProviderKeys(requestOptions));
    }

    private async __findLlmProviderKeys(
        requestOptions?: LlmProviderKey.RequestOptions,
    ): Promise<core.WithRawResponse<OpikApi.ProviderApiKeyPagePublic>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpikApiEnvironment.Default,
                "v1/private/llm-provider-key",
            ),
            method: "GET",
            headers: {
                "Comet-Workspace":
                    (await core.Supplier.get(this._options.workspaceName)) != null
                        ? await core.Supplier.get(this._options.workspaceName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ProviderApiKeyPagePublic.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.OpikApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpikApiTimeoutError("Timeout exceeded when calling GET /v1/private/llm-provider-key.");
            case "unknown":
                throw new errors.OpikApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Store LLM Provider's ApiKey
     *
     * @param {OpikApi.ProviderApiKeyWrite} request
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.UnauthorizedError}
     * @throws {@link OpikApi.ForbiddenError}
     *
     * @example
     *     await client.llmProviderKey.storeLlmProviderApiKey({
     *         provider: "openai"
     *     })
     */
    public storeLlmProviderApiKey(
        request: OpikApi.ProviderApiKeyWrite,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__storeLlmProviderApiKey(request, requestOptions));
    }

    private async __storeLlmProviderApiKey(
        request: OpikApi.ProviderApiKeyWrite,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpikApiEnvironment.Default,
                "v1/private/llm-provider-key",
            ),
            method: "POST",
            headers: {
                "Comet-Workspace":
                    (await core.Supplier.get(this._options.workspaceName)) != null
                        ? await core.Supplier.get(this._options.workspaceName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ProviderApiKeyWrite.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new OpikApi.UnauthorizedError(_response.error.body, _response.rawResponse);
                case 403:
                    throw new OpikApi.ForbiddenError(
                        serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                default:
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpikApiTimeoutError(
                    "Timeout exceeded when calling POST /v1/private/llm-provider-key.",
                );
            case "unknown":
                throw new errors.OpikApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get LLM Provider's ApiKey by id
     *
     * @param {string} id
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.llmProviderKey.getLlmProviderApiKeyById("id")
     */
    public getLlmProviderApiKeyById(
        id: string,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): core.HttpResponsePromise<OpikApi.ProviderApiKeyPublic> {
        return core.HttpResponsePromise.fromPromise(this.__getLlmProviderApiKeyById(id, requestOptions));
    }

    private async __getLlmProviderApiKeyById(
        id: string,
        requestOptions?: LlmProviderKey.RequestOptions,
    ): Promise<core.WithRawResponse<OpikApi.ProviderApiKeyPublic>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpikApiEnvironment.Default,
                `v1/private/llm-provider-key/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                "Comet-Workspace":
                    (await core.Supplier.get(this._options.workspaceName)) != null
                        ? await core.Supplier.get(this._options.workspaceName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ProviderApiKeyPublic.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new OpikApi.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpikApiTimeoutError(
                    "Timeout exceeded when calling GET /v1/private/llm-provider-key/{id}.",
                );
            case "unknown":
                throw new errors.OpikApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update LLM Provider's ApiKey
     *
     * @param {string} id
     * @param {OpikApi.ProviderApiKeyUpdate} request
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.UnauthorizedError}
     * @throws {@link OpikApi.ForbiddenError}
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.llmProviderKey.updateLlmProviderApiKey("id")
     */
    public updateLlmProviderApiKey(
        id: string,
        request: OpikApi.ProviderApiKeyUpdate = {},
        requestOptions?: LlmProviderKey.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__updateLlmProviderApiKey(id, request, requestOptions));
    }

    private async __updateLlmProviderApiKey(
        id: string,
        request: OpikApi.ProviderApiKeyUpdate = {},
        requestOptions?: LlmProviderKey.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpikApiEnvironment.Default,
                `v1/private/llm-provider-key/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
            headers: {
                "Comet-Workspace":
                    (await core.Supplier.get(this._options.workspaceName)) != null
                        ? await core.Supplier.get(this._options.workspaceName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ProviderApiKeyUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new OpikApi.UnauthorizedError(_response.error.body, _response.rawResponse);
                case 403:
                    throw new OpikApi.ForbiddenError(
                        serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new OpikApi.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpikApiTimeoutError(
                    "Timeout exceeded when calling PATCH /v1/private/llm-provider-key/{id}.",
                );
            case "unknown":
                throw new errors.OpikApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: apiKeyValue };
    }
}
