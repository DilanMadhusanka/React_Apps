import React from 'react';

import UserCreate from './UserCreate';

class App extends React.Component {

    state = { language: 'english' }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i className="flag us"  onClick={() => this.onLanguageChange('english')} />
                    <i className="flag lk" onClick={() => this.onLanguageChange('sinhala')} />
                </div>
                <UserCreate />
            </div>);
    }
}

export default App;