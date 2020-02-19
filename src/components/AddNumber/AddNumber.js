import React from 'react';
import {connect} from 'react-redux';
import {onsetInputNumber,onsetRandomNumber,onsetResultTxt , onsetTries, onsetGuesses, onsetResult} from '../../actions/index.js';
import './AddNumber.css';

class AddNumber extends React.Component{
    
    componentDidMount(){
        let selectedNumber = this.props.numbers[Math.floor(Math.random() * this.props.numbers.length)];
        this.props.onsetRandomNumber(selectedNumber);
        
    }

    onChangeNumber=(number)=>{
        console.log('number->' + number);
        this.props.onsetInputNumber(number); 
    }

    onSubmit=()=>{
        let ltries;
        let lguess;
        let oldGuesses = this.props.guesses;
        
        if(this.props.inputNumber > this.props.randomNumber){
            this.props.onsetResultTxt('Input value is greater than the random number');
        }else if(this.props.inputNumber < this.props.randomNumber){
            this.props.onsetResultTxt('Input value is less than the random number');
        }else if(this.props.inputNumber == this.props.randomNumber){
            this.props.onsetResultTxt('Congratulations! You won!!');
        }
        ltries = this.props.tries + 1;
        lguess = {guess: ltries ,val:this.props.inputNumber};
        let newGuesses = [...oldGuesses,lguess];
        this.props.onsetTries(ltries);
        this.props.onsetGuesses (newGuesses)
    }

    render(){
        this.props.onsetResult(this.props.inputNumber === -1 ? '' : this.props.inputNumber);
        return(
            <div className="AddNumber-Container">
                <input type="number" name="inputNumber" className="inputNumberCl" value={this.props.result} onChange={(e)=>{this.onChangeNumber(e.target.value)}}/> 
                <button className="submitBtn" onClick={this.onSubmit}>Submit</button>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        inputNumber:state.inputNumber,
        randomNumber:state.randomNumber,
        resultTxt:state.resultTxt,
        tries:state.tries,
        guesses:state.guesses,
        numbers:state.numbers,
        result:state.result
    }
}
export default connect(mapStateToProps,{onsetInputNumber,onsetRandomNumber,onsetResultTxt , onsetTries, onsetGuesses, onsetResult})(AddNumber);


