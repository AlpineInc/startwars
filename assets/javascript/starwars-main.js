function Starwars() {
    this.gameStatus = "null"
    this.allPlayers = [],
        this.score = 0,
        this.myPlayer = "",
        this.oppPlayer = "",
        this.oppStandbyPlayers = [],


        this.initialize = function(players) {
            this.allPlayers = players;
            this.gameStatus = "Initialize";
        },
        this.newGame = function() {
            this.score = 0;
            this.myPlayer = "";
            this.oppPlayer = "";
            this.oppStandbyPlayers = [];

            $.each(this.allPlayers, function(index, value) {
                value.draw("div-allplayers");
            })

            this.drawMessageBoard("Select your player");
            this.drawScoreBoard();
            this.gameStatus = "MyPlayerSelect";
        },
        this.drawAllPlayers = function(players) {
            $.each(players, function(index, value) {
                value.draw("div-allplayers");
            })
        }
    	this.drawMessageBoard = function(message) {
            $("#div-messageboard h2").text(message);
        },
        this.onClickPlayer = function(player) {

            if (this.gameStatus === "MyPlayerSelect") {
                for (i = 0; i < this.allPlayers.length; i++) {

                    if (this.allPlayers[i].name === $(player).attr("id")) {
                        this.myPlayer = this.allPlayers[i];
                    } else {
                        this.oppStandbyPlayers.push(this.allPlayers[i]);
                    }
                }

                /*$.each(this.allPlayers,function(index, value){
                	console.log(index, this.allPlayers);
                	if(value.name === $(player).attr("id")){
                		console.log(index, this.allPlayers);
                		this.myPlayer= value;
                	}

                });*/

                this.myPlayer.draw("div-myplayer");
                this.drawMessageBoard("Select your opponent player");
                this.gameStatus = "OppPlayerSelect";


            } else if (this.gameStatus === "OppPlayerSelect") {
                for (i = 0; i < this.oppStandbyPlayers.length; i++) {

                    if (this.oppStandbyPlayers[i].name === $(player).attr("id")) {
                        this.oppPlayer = this.oppStandbyPlayers[i];
                        this.oppStandbyPlayers.splice(i, 1);
                    }
                }

                $("#div-allplayers").empty();
                this.oppPlayer.draw("div-oppplayer");
                $.each(this.oppStandbyPlayers, function(index, value) {
                    value.draw("div-oppstandbyplayer");
                });
                this.drawMessageBoard("Attack!");
                this.gameStatus = "Engage";


            } else if (this.gameStatus === "Engage") {
                return;
            }

        },
        this.onAttack = function() {
            if (this.gameStatus !== "Engage") {
                return;
            } else {
                this.myPlayer.gotHit(this.oppPlayer);
                this.oppPlayer.gotHit(this.myPlayer);
                if (!this.myPlayer.canFight()) {
                    this.gameStatus = "GameOver";
                    this.drawMessageBoard("Game over. You lost.");

                } else if (!this.oppPlayer.canFight()) {
                    this.oppPlayer.remove();
                    this.score++;
                    this.drawScoreBoard();
                    if(this.oppStandbyPlayers.length > 0){
                    	this.drawAllPlayers(this.oppStandbyPlayers);
                    	this.drawMessageBoard("Well done! Pick your next opponent..");
                    	this.gameStatus = "OppPlayerSelect";
                    } else {
                    	this.drawMessageBoard("Game over. You won.!!!");
                    	this.gameStatus = "GameOver";
                    }
                }
            }
        }
    this.drawScoreBoard = function() {
        $("#h2-score").text(this.score);
    }



};