import React from 'react';

function Food(props) {
    console.log(props);
    return <h1> I like {props.fav}</h1>;
}

function App() {
    return (
        <div className="App">
            <h1>hello</h1>
            <Food fav="kimchi"/>
        </div>
    );
}

export default App;