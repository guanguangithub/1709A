/// <reference types="react-scripts" />

declare module "*.scss";

declare interface AxiosReponse<T={}>{
    code: number,
    msg: string,
    data?: T,
    [name: string]: any
}