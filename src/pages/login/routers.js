import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/index';

export default (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        {/* <Route path="/app" exact component={App} />
        <Route path="/data" exact component={Data} />
        <Route path="/participle" exact component={Participle} />
        <Route path="/lda" exact component={Lda} /> */}
    </BrowserRouter>
)