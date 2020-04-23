let inputArray = [-1, 10, -9, 5, 6, -10];
let nStartPosition = 2; // only >= 0
let nEndPosition = 4;   // only >= 0

function getSumArray(inputArray, nStartPosition, nEndPosition) {
    try {        
        let nSumSequence;

        // Check input parameters
        let bIsStartIndex = checkIndexInArray(inputArray, nStartPosition);
        let bIsEndIndex = checkIndexInArray(inputArray, nEndPosition);            
        
        if (bIsStartIndex && bIsEndIndex) {
            nSumSequence = 0;
            for (let i = nStartPosition; i <= nEndPosition; i++) {
                nSumSequence = nSumSequence + inputArray[i];                
            }
        }

        return nSumSequence;
    }
    catch(error) {
        console.log("Some error in script!");
    }
    
}

// ----------------------------------------------------------------
function checkIndexInArray(nArray, nIndex) {
    try {
        let bIsPresent = false; // default value

        let nLenArray = nArray.length;

        if (nIndex >= 0 && nIndex < nLenArray) {
            bIsPresent = true;
        }              

        return bIsPresent;
        }
    catch (error) {
        console.log("Some error in checking of presence index in array!");
    }        
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
console.log(inputArray);
console.log(getSumArray(inputArray, nStartPosition, nEndPosition));