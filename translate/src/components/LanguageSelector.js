import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return(
            <div>
                Select language:
                <i className="flag us"  onClick={() => this.props.onLanguageChange('english')} />
                <i className="flag lk" onClick={() => this.props.onLanguageChange('sinhala')} />
            </div>
        );
    }
}

export default LanguageSelector;