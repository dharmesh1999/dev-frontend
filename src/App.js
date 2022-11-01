import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Header from './components/layout/Header';
import Login from './components/auth/Login/Login';
import Singup from './components/auth/Singup/Singup';
import setAuthToken from './utils/setAuthToken';
import store from './redux/store';
//Redux

import './App.css';
import { loadUser } from './redux/actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Profile from './components/profile/Profile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

// import PrivateRoute from './components/routing/PrivateRoute';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
          {/* <Route
            path='/dashboard'
            element={<PrivateRoute Component={Dashboard} />}
          /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/add-education' element={<AddEducation />} />
          <Route path='/add-experience' element={<AddExperience />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
