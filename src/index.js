import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Admin from './v1/pages/admin/admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './v1/pages/public/app';
import User from './v1/pages/admin/user';
import { Activity, Create } from './v1/pages/admin/activities';
import NotFound from './v1/pages/notFound';
import SignIn from './v1/pages/signIn';
import store from './v1/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="v1" >
            <Route path="login" element={ <SignIn /> } />
            <Route path="admin" element={ <Admin /> } >
              <Route path="user" element={ <User /> } />
              <Route path="activity">
                <Route index element={ <Activity /> } />
                <Route path="create" element={ <Create />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
