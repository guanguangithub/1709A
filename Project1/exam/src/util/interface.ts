export interface IRouterItem{
    path: string,
    component?: Function,
    redirect?: string,
    children?: IRouterItem []
}
export interface IRouteProps{
    routes: IRouterItem []
}