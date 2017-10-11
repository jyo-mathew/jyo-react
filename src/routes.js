import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import DashBoradPage from './components/dashBoard/DashBoardPage';
import ActivitiesPage from './components/30days/ActivityPage';
export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage}/>
    <Route path="course" component={CoursesPage}/>
    <Route path="dashBoard" component={DashBoradPage}/>
    <Route path="ActivitiesPage" component={ActivitiesPage}/>
  </Route>
);
