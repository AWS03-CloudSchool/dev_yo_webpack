import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './comp/pic';

const App = () => {
  return (
    <div>
        <Pic/>
        Hello!! This is webpack, 준표야 너무 심심해
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));