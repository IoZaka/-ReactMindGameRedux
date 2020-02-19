export const setInputNumber= 'setInputNumber';
export const setRandomNumber='setRandomNumber';
export const setResultTxt = 'setResultTxt';
export const setTries = 'setTries';
export const setGuesses = 'setGuesses';
export const setResult = 'setResult';

export function onsetInputNumber(inpuNumber){
    const action={
        type:setInputNumber,
        payload:inpuNumber
    }

    return action;
}

export function onsetRandomNumber(randomNumber){
    const action={
        type:setRandomNumber,
        payload:randomNumber
    }

    return action;
}

export function onsetResultTxt(resultTxt){
    const action={
        type:setResultTxt,
        payload:resultTxt
    }

    return action;
}

export function onsetTries(tries){
    const action={
        type:setTries,
        payload:tries
    }

    return action;
}

export function onsetGuesses(guesses){
    const action={
        type:setGuesses,
        payload:guesses
    }

    return action;
}

export function onsetResult(result){
        const action={
            type:setResult,
            payload:result
        }

    return action;
}
