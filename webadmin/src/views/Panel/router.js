import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { Pmain, Ptable, Pform } from "../Panel"


// let { url } = useRouteMatch();
// let { id } = useParams();

export const routes = [
    {
        path: `/Ptable@=:id`,
        component: Ptable
    },
    {
        path: `/Pform@=:id`,
        component: Pform
    }

];



export const RouteWithSubRoutes = function (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}