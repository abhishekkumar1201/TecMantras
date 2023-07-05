import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';

function Home() {
    return (
        <div className="container">
            <UserList/>
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}