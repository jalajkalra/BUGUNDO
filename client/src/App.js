import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Switch,withRouter,Route} from 'react-router-dom';
import Login from './components/account/login';
import Registration from './components/account/registration';
import ContactPage from './components/contactUs/contactUs';
import Description from './components/description/description';
import FindBugs from './components/findBugs/findBugs';
import Home from './components/home/home';
import ReportBug from './components/reportBug/reportBug';
import { checkAuthState } from './entities/action/action';

const App = ()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkAuthState());
  },[])
  return (
    <Switch>
      <div>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/contactUs" component={ContactPage}/>
        <Route exact path="/reportBugs" component={ReportBug}/>
        <Route exact path="/findBugs" component={FindBugs}/>
        <Route exact path="/bugs/:id" component={Description}/>
      </div>
    </Switch>
  );
}

export default withRouter(App);
