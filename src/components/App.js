import React from 'react';
import AddNumber from './AddNumber/AddNumber.js';
import Result from './result/Result.js';
import Guesses from './Guesses/Guesses.js';
import './App.css';





class App extends React.Component{

    render(){
        return(
            <div className="mainContainer">
                <div className="inputArea">
                <AddNumber            
                />
                <Result
                />
                </div>
                <div className="guessArea">
                <Guesses

                />
                </div>
            </div>

        )
    }
}
export default App ;