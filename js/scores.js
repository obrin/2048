var Scores = function() {
	this.score = 0;
	this.bestScore = 0;

	this.scoreDom = document.getElementById('score');
	this.bestScoreDom = document.getElementById('best');
	this.newGame = document.getElementById('new-game');

};

Scores.prototype.addScore = function(score) {
	this.score += score;
	if (this.bestScore < this.score) {
		this.bestScore += score;
	}
	this.updateScores();
};

Scores.prototype.updateScores = function(score) {
	this.scoreDom.innerHTML = this.score;
	this.bestScoreDom.innerHTML = this.bestScore;
};

Scores.prototype.init = function() {
	this.scoreDom.innerHTML = this.score;
	this.bestScoreDom.innerHTML = this.bestScore;
};

Scores.prototype.reset = function() {
	this.score = 0;
	this.scoreDom.innerHTML = 0;
	console.log('reset');
};
