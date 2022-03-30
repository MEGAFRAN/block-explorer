import { AxiosRequestConfig } from "axios";

export interface ApiCoreConstructorInterface extends DataProviderInterface
{
    getAll: boolean,
    getSingle: boolean,
    post: boolean,
    put: boolean,
    patch: boolean,
    remove: boolean,
}

export interface DataProviderInterface 
{
    apiUrl: string | undefined,
    endpoint: string | undefined,
    id?: AxiosRequestConfig<any>,
    model?: object
}