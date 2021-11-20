
export const checkIfOneOfThreeRequiredFieldIsNotFound = (keys)=>{
 
    if(!keys.includes('startDate') || 
    !keys.includes('endDate') || 
    !keys.includes('minCount') ||
    !keys.includes('maxCount') ){
    
        return true;
    }
    return false;
}

export const checkNumberOfField = (keys)=>{
    if(keys.length>4)
    {
        return true;
    }
    return false;
}

