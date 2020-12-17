
class GoldRush extends Matrix{
    constructor()
    {
        super(5,5)
        this.player1 = {score: 0}
        this.player2 = {score: 0}
        this.amount = 0

    }

    loadBoard()
    {
        for(let i=0;i<this.matrix.length;i++)
        {
            for(let j=0;j<this.matrix[i].length;j++)
            {
                this.matrix[i][j] = '.'
            }
        }

        this.matrix[0][0] = 1
        this.matrix[this.matrix.length - 1][this.matrix.length - 1] = 2
        this.matrix[1][0] = 'c'
        this.putCoins()
    }
    putCoins()
    {
        this.amount = Math.floor(Math.random() * 5 + 4)
        console.log(this.amount)
        for(let i = 0; i<this.amount;i++)
        {
            let rowNum = Math.floor(Math.random() * 5)
            let colNum = Math.floor(Math.random() * 5)
            if(this.get(rowNum,colNum) === '.')
            {
                this.alter(rowNum,colNum,'c')
            }
        }

    }
    moveUp(player)
    {
        if(player === 1)
        {
            let coords =  super.findCoordinate(1)
            if(coords.y > 0)
            {
                if(this.get(coords.y - 1,coords.x) !== 2)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y - 1,coords.x) === 'c')
                    {
                        this.player1.score++
                        this.amount--
                    }
                    super.alter(coords.y - 1,coords.x, 1)
                
                }
                else
                {
                    console.log("This is the highest you can get to")
                }
            }
        }
        else
        {
            let coords =  super.findCoordinate(2)
            if(coords.y > 0)
            {
                if(this.get(coords.y - 1,coords.x) !== 1)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y - 1,coords.x) === 'c')
                    {
                        this.player2.score++
                        this.amount--
                    }
                    super.alter(coords.y - 1,coords.x, 2)
                }
            }
            else
            {
                console.log("This is the highest you can get to")
            }
        }
    }
    moveDown(player)
    {
        if(player === 1)
        {
            let coords =  super.findCoordinate(1)
            if(coords.y < this.matrix.length - 1)
            {
                if(this.get(coords.y + 1,coords.x) !== 2)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y + 1,coords.x) === 'c')
                    {
                        this.player1.score++
                        this.amount--
                    }
                    super.alter(coords.y + 1,coords.x, 1)
                }
            }
            else
            {
                console.log("This is the lowest you can get to")
            }
        }
        else
        {
            let coords =  super.findCoordinate(2)
            if(coords.y < this.matrix.length - 1)
            {
                if(this.get(coords.y + 1,coords.x) !== 1)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y + 1,coords.x) === 'c')
                    {
                        this.player2.score++
                        this.amount--
                    }
                    super.alter(coords.y + 1,coords.x, 2)
                }  
            }
            else
            {
                console.log("This is the lowest you can get to")
            }
        }
    }
    moveLeft(player)
    {
        if(player === 1)
            {
                let coords =  super.findCoordinate(1)
                if(coords.x > 0)
                {
                    if(this.get(coords.y,coords.x - 1) !== 2)
                    {
                        this.matrix[coords.y][coords.x] = '.'
                        if(this.get(coords.y,coords.x - 1) === 'c')
                        {
                            this.player1.score++
                            this.amount--
                        }
                        super.alter(coords.y,coords.x - 1, 1)
                    }
             
                }
                else
                {
                    console.log("This is the leftest you can get to")
                }
            }
            else
            {
                let coords =  super.findCoordinate(2)
                if(coords.x > 0)
                {
                    if(this.get(coords.y,coords.x - 1) !== 1)
                    {
                        this.matrix[coords.y][coords.x] = '.'
                        if(this.get(coords.y,coords.x - 1) === 'c')
                        {
                            this.player2.score++
                            this.amount--
                        }
                        super.alter(coords.y,coords.x - 1, 2)
                    }
                    
                }
                else
                {
                    console.log("This is the leftest you can get to")
                }
        }
    }
    moveRight(player)
    {
        if(player === 1)
        {
            let coords =  super.findCoordinate(1)
            if(coords.x < this.matrix.length - 1)
            {
                if(this.get(coords.y,coords.x + 1) !== 2)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y,coords.x + 1) === 'c')
                    {
                        this.player1.score++
                        this.amount--
                    }
                    super.alter(coords.y,coords.x + 1, 1)
                }
            }
            else
            {
                console.log("This is the rightest you can get to")
            }
        }
        else
        {
            let coords =  super.findCoordinate(2)
            if(coords.x < this.matrix.length - 1)
            {
                if(this.get(coords.y,coords.x + 1) !== 1)
                {
                    this.matrix[coords.y][coords.x] = '.'
                    if(this.get(coords.y,coords.x + 1) === 'c')
                    {
                        this.player2.score++
                        this.amount--
                    }
                    super.alter(coords.y,coords.x + 1, 2)
                }
            }
            else
            {
                console.log("This is the rightest you can get to")
            }
    }
    }
    movePlayer(player,direction)
    {
        if(direction === "up")
        {
            this.moveUp(player)
        }
        else if(direction === "down")
        {
            this.moveDown(player)
        }
        else if(direction === "left")
        {
            this.moveLeft(player)
        }
        else if(direction === "right")
        {
            this.moveRight(player)
        }
    }  
    play(rowNum,columnNum,player)
    {
        if(player === 1)
        {
            super.alter(rowNum,columnNum,'O')
        }
        else
        {
            super.alter(rowNum,columnNum,'X')
        }


    }
    getBoard()
    {
        return this.matrix
    }
    getPlayer1Score()
    {
        return this.player1.score
    }
    getPlayer2Score()
    {
        return this.player2.score
    }
    getAmount()
    {
        return this.amount
    }
}

/*
let board = new GoldRush()
board.loadBoard()
board.print()
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
board.print()
console.log(board.player1.score)
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
board.movePlayer(2, "down") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(1, "up") //this method should be defined inside of GoldRush
board.movePlayer(2, "up") //this method should be defined inside of GoldRush
console.log("new")
board.print()
//prints
// .       .       .       .       .
// 1       .       .       .       .
// .       .       .       .       .
// .       .       .       .       .
// .       .       .       .       2

board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "right")
board.movePlayer(2, "right")
board.movePlayer(2, "right")
board.movePlayer(2, "right")
board.movePlayer(2, "right")
board.print()
//prints
// .       .       .       .       .
// 1       .       .       .       .
// .       .       .       .       .
// .       .       .       .       .
// .       .       .       2       .
*/