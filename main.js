const goldRush = new GoldRush()
const renderer = new Renderer()
Handlebars.registerHelper("checkClass", function(current) {
    if(current === '.')
    {
        return 'board-item'
    }
    else if(current === 'c')
    {
        return 'coin-item'
    }
    else if(current === 1)
    {
        return 'player1'
    }
    else
    {
        return 'player2'
    }
});

Handlebars.registerHelper("checkPlayer", function(current) {

    if(current === 1)
    {
        return `<img src="https://www.flaticon.com/premium-icon/icons/svg/805/805404.svg"></img>`
    }
    else if(current === '.')
    {
        
        return `<img class=ball src="https://www.flaticon.com/svg/static/icons/svg/459/459829.svg"></img>`
    }
    else if(current === 'c')
    {
        
        return `<img class=ball src="https://www.flaticon.com/svg/static/icons/svg/3231/3231063.svg"></img>`
    }
    else if(current === 2)
    {
        return `<img src="https://www.flaticon.com/premium-icon/icons/svg/805/805401.svg"></img>`
    }
});

goldRush.loadBoard()
renderer.renderBoard(goldRush.getBoard(),goldRush.getPlayer1Score(),goldRush.getPlayer2Score())

$(document).on('keypress',function (e)
 {
     console.log(e.which)
    if (e.which == 119) {
        goldRush.movePlayer(1, "up")
  }
  
   else if (e.which == 115) {
        goldRush.movePlayer(1, "down")
    }
    else if (e.which == 100) {
        goldRush.movePlayer(1, "right")
  }

    else if (e.which == 97) {
        goldRush.movePlayer(1, "left")
  }
  else if (e.which == 105) {
    goldRush.movePlayer(2, "up")
}

else if (e.which == 107) {
    goldRush.movePlayer(2, "down")
}
else if (e.which == 108) {
    goldRush.movePlayer(2, "right")
}

else if (e.which == 106) {
    goldRush.movePlayer(2, "left")
}

renderer.renderBoard(goldRush.getBoard(),goldRush.getPlayer1Score(),goldRush.getPlayer2Score())

if(goldRush.getAmount() === 0)
{
    if(goldRush.getPlayer1Score() > goldRush.getPlayer2Score())
    {
        if (confirm(`     Messi is the GOAT
       Do You want to play again?`)) {
        location.reload()
          } 
          else {

          }
    }
    else if(goldRush.getPlayer1Score() < goldRush.getPlayer2Score())
    {
        if (confirm(`Ronaldo is the GOAT,but still Messi is the GOAT OF ALL GOATS.
        Do You want to play again?`)) {
         location.reload()
           }
            else {
 
           }
    }
    else
    {
        if (confirm(`t's a tie,damn we are so lucky to see them in action.
        Do You want to play again?`)) {
         location.reload()
           } 
           else {
 
           }
    }
}
 })


