$(document).ready(function() {

    var yoda = new Player();
    yoda.initialize("yodo", "assets/images/yoda.png", "6", "100");
    var boba = new Player();
    boba.initialize("boba", "assets/images/boba.png", "10", "100");
    var han = new Player();
    han.initialize("han", "assets/images/han.png", "8", "100");
    var darth = new Player();
    darth.initialize("darth", "assets/images/darth.png", "5", "100");
	var anakin = new Player();
    anakin.initialize("anakin", "assets/images/anakin.png", "5", "100");

    var starwars = new Starwars();
    starwars.initialize([yoda, boba, han, darth, anakin]);
    starwars.newGame();

    $(document).on("click", ".players", function() {
        starwars.onClickPlayer(this);
    });

    $("#btn-attack").on("click", function() {
        starwars.onAttack();
    });

    $("#btn-reset").on("click", function() {
        yoda.initialize("yodo", "assets/images/yoda.png", "6", "100");
        boba.initialize("boba", "assets/images/boba.png", "10", "100");
        han.initialize("han", "assets/images/han.png", "8", "100");
        darth.initialize("darth", "assets/images/darth.png", "5", "100");
        anakin.initialize("anakin", "assets/images/anakin.png", "5", "100");
        starwars.newGame();
    });

});