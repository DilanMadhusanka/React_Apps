import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Sam" timeAgo="Todat at 2:45PM" content="Nice one" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Alex" timeAgo="Today at 5:00AM" content="Try to work hard" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Jenny" timeAgo="Yesterday at 1:23PM" content="Congradulation" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Roobi" timeAgo="Yesterday at 8:AM" content="Good job" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Lavi" timeAgo="Today at 10:47AM" content="Proud to be your job" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));