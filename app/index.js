import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pic from './comp/pic';
import Cookie from './Cookie';
import UserFetcher from './comp/UserFetcher';
import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Hommie</Link></li>
            <li><Link to="/fetch-user">Fetch User</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/fetch-user" element={<UserFetcher />} />
          <Route path="/" element={
            <>
              <Pic />
              <Cookie />
              <div>Hello!! This is webpack.</div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
