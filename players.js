let players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(let i = 1; i <= num; i++)
        {
            let hand = new Array();
            let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }