import React from "react";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Route path="/course" component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
