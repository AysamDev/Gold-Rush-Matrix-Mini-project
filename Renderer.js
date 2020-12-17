class Renderer {
    constructor()
    {
        this.template = $('#board-template').html()
        this.templateScript = Handlebars.compile(this.template)
    }

    renderBoard(board,player1Score,player2Score)
    {
        $('#board-container').children().remove()
        const html =  this.templateScript({board})
        console.log(board)
        $('#board-container').append(html)
        $('#c1').text(player1Score)
        $('#c2').text(player2Score)

       
    }
}