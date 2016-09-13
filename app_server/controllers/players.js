module.exports.playerList = function(req, res){
  res.render('players', { title : "Just a list of players at the moment", players : ["Aguero", "Zlatan"]});
}
