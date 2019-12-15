// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me!';
}

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';
    const buttonText2 = ['Click', 'Button'];
    const buttonObject = {text: 'Click This!'};
    const buttonStyle = {backgroundColor:'blue', color:'white'}

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={buttonStyle} >{buttonText}</button>
            <button style={{backgroundColor:'red', color:'white'}} >{getButtonText()}</button>
            <button style={{backgroundColor:'green', color:'white'}} >{buttonText2}</button>
            <button style={{backgroundColor:'black', color:'white'}} >{buttonObject.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);