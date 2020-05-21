import React from 'react';
import { Switch, Route } from 'react-router-dom'

interface IRouterItem{
    path: string,
    component: Function,
    children?: IRouterItem []
}
interface IProps{
    routes: IRouterItem []
}

const RouterView: React.FC<IProps> = props => {
    return <Switch>{
        props.routes.map((item, index) => {
            return <Route key={index} path={item.path} render={routeProps => {
                if (item.children) {
                    return <item.component routes={item.children} {...routeProps} />
                } else {
                    return <item.component {...routeProps} />
                }
            }}></Route>
        })
    }</Switch>
}

export default RouterView;