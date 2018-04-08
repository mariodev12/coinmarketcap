import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Header from './header/header';
import Home from './content/Home/content';
import Page from './content/Page/content';
import Detail from './details/details';
import PaginationCustom from './pagination/paginationCustom';

const Pages = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/:page" component={Page}/>
            <Route exact path="/:id/:coin" component={Detail}/>
            <PaginationCustom />
        </div>
    </Router>
)

ReactDOM.render(<Pages />, document.getElementById('root'));
registerServiceWorker();
