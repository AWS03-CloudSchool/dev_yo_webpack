import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './comp/pic';
import Cookie from './Cookie';
import UserFetcher from './comp/UserFetcher';
import './styles/index.scss'

const App = () => {
  return (
    <div>
        <Pic/>
        <Cookie/>
        <UserFetcher/>
        Hello!! This is webpack.
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));