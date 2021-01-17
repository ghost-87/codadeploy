const leveler = (wins) => {
    return wins >= 2 ? Math.floor(wins/2) : 0;
}

const useGame = (opposingBet, selectedPlayers) => {  

    let updatedSelectedPlayers = null;

    if(opposingBet >= 1 && opposingBet <= 9){
        updatedSelectedPlayers = selectedPlayers.map(player => {
            if(player.Bet === opposingBet){
                const playerPrice = parseInt(player.Price);
                return {
                    ...player,
                    Price: (playerPrice * 2).toString(),
                    wins: player.wins + 1,
                    level: leveler(player.wins + 1),
                }
            }else{
                return {
                    ...player,
                    lost: player.lost + 1,
                }
            }
        })
    }
    
    return updatedSelectedPlayers;
}

export default useGame;