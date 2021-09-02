import React from 'react';
import{
    BrowserRouter,Route,Switch,Redirect
  } from 'react-router-dom';
import decode from 'jwt-decode';
import home from './Home';
import login from './Login';
import register from './Register';

const checkAuth=()=>{
    const  token=localStorage.getItem('token');
    const refreshToken=localStorage.getItem('refreshToken');
    try{
        decode(token);
        decode(refreshToken);
    }catch(err){
        return false;
    }
    return true;
};
const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
    {...rest}
    render={props =>
    (checkAuth() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname: '/login',
        }}/>
    ))}
/>
);

const index = ()=>(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Redirect to="/home"/>
        </Route>
        <Route path="/login" exact component={login}/>
        <Route path="/register" exact component={register}/>
        <PrivateRoute path='/home' exact component={home}/>
      </Switch>
    </BrowserRouter>
  );
  
  export default index;