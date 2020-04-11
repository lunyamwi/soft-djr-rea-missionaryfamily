import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";
import ImageList from "./containers/Images";
import BookList from "./containers/Book";
import MusicList from "./containers/Music";
import SermonList from "./containers/SermonList";
import Mpesa from "./containers/Mpesa";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import About from "./containers/About";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/create/" component={AssignmentCreate} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/assignments/" component={AssignmentList} />
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />
    <Route exact path="/images/" component={ImageList} />
    <Route exact path="/books/" component={BookList} />
    <Route exact path="/music/" component={MusicList} />
    <Route exact path="/mpesa/" component={Mpesa} />
    <Route exact path="/sermons/" component={SermonList} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
    <Route exact path="/profile/:id" component={Profile} />
  </Hoc>
);

export default BaseRouter;
