/* Write your code below */
class Matrix {

    constructor(numRows,numColumns)
    {
        this.matrix = this.generateMatrix(numRows,numColumns)
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }
     printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
     printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
     get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
     alter(r, c, v) {
        this.matrix[r][c] = v
    }
    findCoordinate(value)
    {
        for(let i=0;i<this.matrix.length;i++)
        {
            for(let j=0;j<this.matrix[i].length;j++)
            {
                if(this.matrix[i][j] === value)
                {
                    return {x:j,y:i};
                }
            }
        }
        return null
    }

    
}
