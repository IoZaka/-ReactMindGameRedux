import React from 'react';
import  './Guesses.css';
import Guess from '../Guess/Guess.js';
import {connect} from 'react-redux';

class Guesses extends React.Component{
    
    render(){
        console.log(this.props.guesses)
        return(
            <div className="Guesses-container">
                    {
                        this.props.guesses.map((g,i)=>{
                            return(
                                <Guess 
                                    guess={g.guess}
                                    number={g.val}
                                    key={i}

                                />
                            )

                        })
                    }
            </div>

        )
    }
}
function mapStateToProps(state){
    return {
        guesses:state.guesses
    }
}
export default connect(mapStateToProps,(null))(Guesses);