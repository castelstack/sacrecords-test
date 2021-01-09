import React from 'react';
import {  Switch, Route, Link, useRouteMatch  } from "react-router-dom";

import Matrimony from './matrimony/matrimony';

const CreateRecord = (props) => {
    let { url } = useRouteMatch();
    let { path } = useRouteMatch();
    return (
        <div>
            <>
                <Link to={`${url}/matrimony`} >Matrimony</Link>
                </>
            <Switch>
                <Route path={`${path}/:matrimony`} component={Matrimony} />
                </Switch>
        </div>
    );
};

export default CreateRecord;