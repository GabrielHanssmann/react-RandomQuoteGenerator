import React from "react";
// axios makes the request to the api
import axios from 'axios';

import './App.css'

class App extends React.Component {
    state = { advice: ''};

    // componentDidMount renders at the begining, here we can put the methos inside the App
    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>{
            //get the info we want from the object in advicelip.com
            const { advice } = response.data.slip;

            //set the advice value to the advice property in the state component of line 8
            this.setState({ advice });
        })
        .catch((error) =>{
            
        })
    }

    render(){
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me more ADVICE!!!</span>
                    </button>
                </div>
            </div>
            
        )
    }
}

export default App;