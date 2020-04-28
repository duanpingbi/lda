import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom'
import Data from './pages/index';
import ArticleDetail from './pages/detail';

export default (
    <BrowserRouter>
        <Route path="/data" component={Data} />
        <Route path="/detail" exact component={ArticleDetail} />
    </BrowserRouter>
)