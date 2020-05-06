import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/index';
import RegistrationForm from './pages/resgister';

export default (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={RegistrationForm} />
        {/* <Route path="/app" exact component={App} />
        <Route path="/data" exact component={Data} />
        <Route path="/participle" exact component={Participle} />
        <Route path="/lda" exact component={Lda} /> */}
    </BrowserRouter>
)