function Player() {
    this.name = "",
        this.image = "",
        this.strikePower = "",
        this.currentStikePower = "",
        this.life = "",
        this.tag = null,
        this.htmlPlayerdiv = $("<div>"),
        this.htmlPlayerName = $("<h3>"),
        this.htmlPlayerImg = $("<img>"),
        this.htmlPlayerLife = $("<h3>"),
        //initialize function
        this.initialize = function(name, image, strikePower, life, tag) {
            this.name = name;
            this.image = image;
            this.strikePower = strikePower;
            this.life = life;
            this.tag = tag;
            this.htmlPlayerdiv.addClass("players");
            this.htmlPlayerdiv.attr("id", this.name);
            this.htmlPlayerName.text(this.name);
            this.htmlPlayerdiv.append(this.htmlPlayerName);
            this.htmlPlayerImg.attr("src", this.image);
            this.htmlPlayerdiv.append(this.htmlPlayerImg);
            this.htmlPlayerLife.text(this.life);
            this.htmlPlayerdiv.append(this.htmlPlayerLife);
        }
    	//rendering function
    	this.draw = function(location) {
            $("#" + this.name).remove();
            $("#" + location).append(this.htmlPlayerdiv);
        },
        this.remove = function() {
            $("#" + this.name).remove();
        },
        //setter and getter
        this.setTag = function(tag) {
            return;
        },
        this.getTag = function() {
            return this.tag;
        },
        this.setStrikePower = function(strikePower) {
            this.strikePower = strikePower;
        },
        this.getStrikePower = function() {
            return this.strikePower;
        },
        //action function
        this.canFight = function() {
            if (this.life > 0) {
                return true;
            } else {
                return false;
            }
        },
        this.gotHit = function(hitBy) {
            this.life -= hitBy.strikePower;
            this.htmlPlayerLife.text(this.life);
        }


};