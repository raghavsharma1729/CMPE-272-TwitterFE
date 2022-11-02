import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/HomePage';
import PageNotFound from './pages/NotFound';
import CreateTweet from './pages/createTweet';
import AllTweets from './pages/AllTweets';
const RouterContent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/create-tweet" element={<CreateTweet></CreateTweet>} />
            <Route path="/tweets" element={<AllTweets></AllTweets>} />
            <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
    </Router>
);

export default RouterContent;