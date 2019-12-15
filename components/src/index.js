import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author="Sam" timeAgo="Todat at 2:45PM" content="Nice one" avatar={faker.image.avatar()} />
            <CommentDetails author="Alex" timeAgo="Today at 5:00AM" content="Try to work hard" avatar={faker.image.avatar()} />
            <CommentDetails author="Jenny" timeAgo="Yesterday at 1:23PM" content="Congradulation" avatar={faker.image.avatar()} />
            <CommentDetails author="Roobi" timeAgo="Yesterday at 8:AM" content="Good job" avatar={faker.image.avatar()} />
            <CommentDetails author="Lavi" timeAgo="Today at 10:47AM" content="Proud to be your job" avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));