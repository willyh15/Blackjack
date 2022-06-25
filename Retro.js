function createPlayersUI()
    {
        document.getElementById('players').innerHTML = '';
        for(let i = 0; i < players.length; i++)
        {
            let div_player = document.createElement('div');
            let div_playerid = document.createElement('div');
            let div_hand = document.createElement('div');
            let div_points = document.createElement('div');

            div_points.className = 'points';
            div_points.id = 'points_' + i;
            div_player.id = 'player_' + i;
            div_player.className = 'player';
            div_hand.id = 'hand_' + i;

            div_playerid.innerHTML = players[i].ID;
            div_player.appendChild(div_playerid);
            div_player.appendChild(div_hand);
            div_player.appendChild(div_points);
            document.getElementById('players').appendChild(div_player);
        }
    }