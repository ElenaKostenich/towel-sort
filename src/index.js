// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultArr = [];
    let indexJ;
    if (matrix == null) {
        return resultArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                indexJ = j;
            } else {
                indexJ = matrix[i].length - j - 1;
            }
            resultArr.push(matrix[i][indexJ]);
        }
    }
    return resultArr;
};
