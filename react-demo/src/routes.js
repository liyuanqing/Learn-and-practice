'use strict';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import  from './containers/city/index';
import secondMenuOne from './containers/firstMenu1/secondMenuOne';
import secondMenuTwo from './containers/firstMenu1/secondMenuTwo';
import secondMenuOne from './containers/firstMenu2/secondMenuThree';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './layout/';
import Home from './containers/city/index'

export default (store) => {

    //创建一个与store事件同步的history对象
    const history = syncHistoryWithStore(hashHistory, store);

    return <Router history={history}>
        <Route path="/" component={Layout}>
            <Route path="secondMenuOne" component={secondMenuOne}/>
            <Route path='secondMenuTwo' component={secondMenuTwo}/>
            <Route path='secondMenuThree' component={secondMenuThree}/>
            <IndexRoute component={secondMenuTwo}/>
            <Route path="*" component={secondMenuTwo}/>
        </Route>
    </Router>;
};
