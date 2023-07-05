import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';

function Example() {
    return (
        <div className="container">
            <UserList/>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
