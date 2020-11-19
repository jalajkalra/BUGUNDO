import React from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';
import Login from './components/account/login';
import Registration from './components/account/registration';
import ContactPage from './components/contactUs/contactUs';
import FindBugs from './components/findBugs/findBugs';
import Home from './components/home/home';
import ReportBug from './components/reportBug/reportBug';

const App = ()=> {
  return (
    <Switch>
      <div>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/contactUs" component={ContactPage}/>
        <Route exact path="/reportBugs" component={ReportBug}/>
        <Route exact path="/findBugs" component={FindBugs}/>
      </div>
    </Switch>
  );
}

export default withRouter(App);
