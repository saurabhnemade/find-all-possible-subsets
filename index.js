var input = [1,2,3,4,5];

function getAllPossibleSubsets(array) {
    let resultSubsets = array.reduce((subsets, value)=> {
        return subsets.concat(subsets.map(set => [value, ...set]))
    }, [[]]);
    
    resultSubsets.splice(0, 1); //remove first (0th element) empty subset.
    return resultSubsets;
}

console.log(getAllPossibleSubsets(input));