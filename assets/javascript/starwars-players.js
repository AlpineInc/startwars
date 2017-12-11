function Player() {
    this.name = "",
    this.image = "",
    this.strikePower = "",
    this.baseStrikePower = "",
    this.life = "",
    this.htmlPlayerdiv = $("<div>"),
    this.htmlPlayerName = $("<h3>"),
    this.htmlPlayerImg = $("<img>"),
    this.htmlPlayerLife = $("<h3>"),
    //initialize function
    this.initialize = function(name, image, strikePower, life) {
        this.name = name;
        this.image = image;
        this.strikePower = strikePower;
        this.setStrikePower(strikePower);
        this.life = life;
        this.htmlPlayerdiv.addClass("card m-2 players");
        this.htmlPlayerdiv.attr("id", this.name);
        this.htmlPlayerName.text(this.name);
        this.htmlPlayerName.addClass("card-text")
        this.htmlPlayerdiv.append(this.htmlPlayerName);
        this.htmlPlayerImg.attr("src", this.image);
        this.htmlPlayerImg.addClass("card-img-top")
        this.htmlPlayerdiv.append(this.htmlPlayerImg);
        this.htmlPlayerLife.text(this.life);
        this.htmlPlayerLife.addClass("card-text")
        this.htmlPlayerdiv.append(this.htmlPlayerLife);
    }
	//rendering function
	this.draw = function(location) {
        $("#" + this.name).remove();
        $("#" + location).append(this.htmlPlayerdiv);
    },
    this.erase = function() {
        $("#" + this.name).remove();
    },
    //setter and getter
    this.setStrikePower = function(strikePower) {
        this.strikePower = strikePower;
        this.baseStrikePower = strikePower
    },
    this.incrementStrikePower = function(){
    	this.strikePower = parseInt(this.strikePower) + parseInt(this.baseStrikePower);
    }
    this.getStrikePower = function() {
        return this.strikePower;
    },
    this.decrementLife =  function(dicrementBy){
    	this.life -= dicrementBy;
    	return this.life;
    }
    this.getName = function(){
    	return this.name;
    }
    //action function
    this.canFight = function() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    },
    this.gotHit = function(hitBy) {
    	var life = this.decrementLife(hitBy.getStrikePower());
    	console.log(life);
    	if (life < 0){
    		this.htmlPlayerLife.text(0);
    	} else{
    		this.htmlPlayerLife.text(life);
    	}
    }


};