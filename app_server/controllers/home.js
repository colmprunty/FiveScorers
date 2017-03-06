module.exports.index = function(req, res){
  res.render('index', { title : "Five Scorers"});
}

module.exports.angularApp = function(req, res){
  res.render('layout', { title: "Five Scorers"});
};
