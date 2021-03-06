import React from 'react';
import { Switch, Route,  BrowserRouter as Router , withRouter } from 'react-router-dom';

import App  from "./App";
import  Register  from "./Register";
import  Home  from "./Home";
import  Error  from "./Error";
import xe_trong_bai from "./xe_trong_bai"
import cho_xe_ra from "./cho_xe_ra"
import thong_tin_xe from "./thong_tin_xe"
import FullList from "./FullList"
import addUser from "./addUser"

class Routes extends React.Component {
    render(){
        return (
            <Router>
          <Switch>
            <Route exact path="/"  component={App} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/xe_trong_bai" component={xe_trong_bai} />
            <Route exact path="/cho_xe_ra" component={cho_xe_ra} />
            <Route exact path="/thong_tin_xe" component={thong_tin_xe} />
            <Route exact path="/ExportExcel" component={FullList} />
            <Route exact path="/AddUser" component={addUser} />
          </Switch>
          </Router>
        );
    }
  
}

export default (Routes);