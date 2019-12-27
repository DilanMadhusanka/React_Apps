import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <lable>Video Search</lable>
                        <input type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default App;