
function set(state){
    var identity = state.id;
    let play = new Audio(identity)
    if (GameState.state == "init"){
        GameState.state = "play";
        new Keyboard;
        let hud = new Hud(identity)
        hud.setHud();
        play.play(identity);
    }
    else if (GameState.state == "play"){
        onloadPrep();
        play.stop();
    }

}
 


