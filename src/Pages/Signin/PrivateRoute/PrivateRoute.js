import React from 'react'
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    
    const { user, loading } = useAuth();

    if (loading) {
        return (
          <div className='w-screen h-screen flex justify-center items-center -mt-20'>
            <div class='sk-folding-cube'>
              <div class='sk-cube1 sk-cube'></div>
              <div class='sk-cube2 sk-cube'></div>
              <div class='sk-cube4 sk-cube'></div>
              <div class='sk-cube3 sk-cube'></div>
            </div>
          </div>
        );
    }
      return (
        <div>
          <Route
            {...rest}
            render={({ location }) =>
              user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/signin",
                    state: { from: location },
                  }}
                ></Redirect>
              )
            }
          ></Route>
        </div>
      );
}

export default PrivateRoute
