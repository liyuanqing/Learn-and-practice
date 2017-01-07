'use strict';

import {
  combineReducers
} from 'redux';
import secondMenuOne from './estateManager/serveManager';
import secondMenuTwo from './estateManager/serveManagerAdd';
import secondMenuThree from './estateManager/serveManagerUpdate';

//import header from './memeberManager/header';
import {
  routerReducer
} from 'react-router-redux';

//将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
  secondMenuOne,
  secondMenuTwo,
  secondMenuThree
});

export default rootReducer;
