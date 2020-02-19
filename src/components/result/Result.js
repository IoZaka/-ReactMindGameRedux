import React from 'react';
import {connect} from 'react-redux';
import  './Result.css';

class Result extends React.Component{
    
    render(){
        return(
            <div className="Result-container">
                    <p className="result-txt" >{this.props.resultTxt}</p>
            </div>

        )
    }
}
function mapStateToProps(state){
    return {
        resultTxt:state.resultTxt
    }
}
export default connect(mapStateToProps,(null))(Result);