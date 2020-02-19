import{setInputNumber,setRandomNumber,setResultTxt,setTries,setGuesses,setResult} from '../actions/index.js';

const initialState = {
    inputNumber: -1,
    randomNumber: -1,
    resultTxt: '',
    tries: 0,
    guesses: [],
    numbers: [1,2,3,4,5,6,7,8,9,10],
    result: -1
};

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case setInputNumber:
            return{...state,inputNumber:action.payload}
        case setRandomNumber:
            return{...state,randomNumber:action.payload}
        case setResultTxt:
            return{...state,resultTxt:action.payload}
        case setTries:
            return{...state,tries:action.payload}
        case setGuesses:
            return{...state,guesses:action.payload}
        case setResult:
            return{...state,result:action.payload}
            default:
                return state;
    }
};

export default rootReducer;