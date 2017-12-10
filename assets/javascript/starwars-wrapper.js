$(document).ready(function() {

    var yoda = new Player();
    yoda.initialize("yodo", "assets/images/yoda.png", "6", "100", null);
    var boba = new Player();
    boba.initialize("boba", "assets/images/boba.png", "10", "100", null);
    var han = new Player();
    han.initialize("han", "assets/images/han.png", "8", "100", null);
    var darth = new Player();
    darth.initialize("darth", "assets/images/darth.png", "5", "100", null);

    var starwars = new Starwars();
    starwars.initialize([yoda, boba, han, darth]);
    starwars.newGame();


    $(".players").on("click", ".fClick", function() {
        starwars.onClickPlayer(this);

    });


    $(document).on("click", ".players", function() {
        starwars.onClickPlayer(this);

    });

    $("#btn-attack").on("click", function() {
        starwars.onAttack();

    });





});