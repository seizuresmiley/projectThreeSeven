class MainCanvas{
    constructor(action,args){

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext('2d');

        this.context = context;
        this.canvas = canvas;
        //if (action == "set","start" && GameState.state == "init"){
            //var gradient = context.createLinearGradient(0,0,0,400);
            //gradient.addColorStop(0, "#ff42f5");
            //gradient.addColorStop(1,"#41fffb");
            //context.fillStyle = gradient;
            //context.fillRect(0,0,1280,720);
        //}
        if (action == "lanepress" && args == "left"){
            context.fillStyle = "#ffffff"
            context.fillRect(420,680,100,20);
        }
        if (action == "lanepress" && args == "right"){
            context.fillStyle = "#ffffff"
            context.fillRect(720,680,100,20);
        }

        if (action == "lanenopress" && args == "left"){
            context.fillStyle = "#000000"
            context.fillRect(420,680,100,20);
        }

        if (action == "lanenopress" && args == "right"){
            context.fillStyle = "#000000"
            context.fillRect(720,680,100,20);
        }
        if (action == "clear"){
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        
    }
}

function clearCanvas(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0, "#ff42f5");
    gradient.addColorStop(1,"#41fffb");
    context.fillStyle = gradient;
    context.fillRect(0,0,1280,720);
}

class Anim{
    constructor(song){
        let ctx = new MainCanvas;
        Anim.context = ctx.context;
        Anim.canvas = ctx.canvas;
        Anim.squareColor = "red";
        Anim.speed = 6;
        var rect2={
            x:420,
            y:0,
            width:40,
            height:10,
            directionX: 3
          };
          var rectRight={
            x:600,
            y:0,
            width:40,
            height:10,
            directionX: 3
          };
        Anim.rightNotes = [];
        Anim.notes = [rect2];
        Anim.song = song;
        Anim.frame = 0;
        Anim.time = 508;
        Anim.firstNote = 0;
        
    }

    drawNote(){
       requestAnimationFrame(animate);
       function animate(){
        for(var i=0;i<Anim.notes.length;i++){
            Anim.notes[i].y += Anim.speed;
          }
        for(var j=0;j<Anim.rightNotes.length;j++){
            Anim.rightNotes[j].y += Anim.speed;
          }
          draw();
          requestAnimationFrame(animate);
          function draw(){
            Anim.context.clearRect(0,0,Anim.canvas.width,Anim.canvas.height)
            for (var i=0;i<Anim.notes.length;i++){
                var r=Anim.notes[i];
                Anim.context.strokeStyle = "white";
                Anim.context.lineWidth = 10;
                Anim.context.strokeRect(r.x,r.y,r.width,r.height);
              }
              for (var j=0;j<Anim.rightNotes.length;j++){
                var r2=Anim.rightNotes[j];
                Anim.context.strokeStyle = "red";
                Anim.context.lineWidth = 10;
                Anim.context.strokeRect(r2.x,r2.y,r2.width,r2.height);
              }
            
          }

       }
    }

    addNote(){
        var rect2={
            x:420,
            y:0,
            width:40,
            height:10,
            directionX: 3
          };
        Anim.notes.push(rect2);
    }

    addRightNote(){
        var rect2={
            x:600,
            y:0,
            width:40,
            height:10,
            directionX: 3
          };
        Anim.rightNotes.push(rect2);
    }

    static removeNote(type){
        if (type == "left"){
            Anim.notes.shift();
            console.log("left")
        }
        else{
            Anim.rightNotes.shift();
            console.log("right")
        }
    }
}

class NoteStates{
    constructor(){}
}

class HtmlAnim{
    constructor(){
    }
}

class Hud{
    constructor(song){
        let manifest = new GameManifests;
        this.song = manifest.songManifest[song]
    }
    setHud(){
        document.getElementById("jacketDisplay").src = this.song.jacketPath;
        document.getElementById("jacketDisplay").style.opacity = 1;
        document.getElementById("artist").innerText = this.song.artist;
        document.getElementById("title").innerText = this.song.name;
        document.getElementById("hudLeft").style.opacity = 1;
        document.getElementById("combo").style.opacity = 1;
        document.getElementById("score").style.opacity = 1;
    }
}

class Combo{
    constructor(){
        Combo.combo = 0;
        Combo.maxCombo = 0;
    }

    static addCombo(){
        Combo.combo += 1;
        document.getElementById("combo").innerText = "Combo : " + Combo.combo;
    }

    static resetCombo(){
        Combo.maxCombo = Combo.combo;
        Combo.combo = 0;
        document.getElementById("combo").innerText = "Combo : " + Combo.combo;
    }
}

class Score{
    constructor(){
        Score.score = 0;
    }
    
    static addScore(amount){
        Score.score += amount;
        document.getElementById("score").innerText = "Score: " + Score.score;

    }
}

class JudgeCounter{
    constructor(){
        JudgeCounter.pf = 0;
        JudgeCounter.gd = 0;
        JudgeCounter.ni = 0;
        JudgeCounter.bd = 0;
        JudgeCounter.mi = 0;
    };

    static countJudge(type){
        JudgeCounter[type] += 1;
    }
}