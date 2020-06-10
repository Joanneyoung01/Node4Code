import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Posts from "./components/posts.component";
import EditPost from "./components/editPosts.component";
import userSignup from "./components/userSignup.component";
import userLogin from "./components/userLogin.component";


function App() {

  return (
    <Router>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/posts/:id" exact component={EditPost}/>
      <Route path="/user/new" exact component={userSignup}/>
      <Route path="/user/login" exact component={userLogin}/>
    </Router>
  );
}

export default App;
