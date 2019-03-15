class GameState{
    constructor (){
        if (this.state == "init"){
            //
        } if (this.state == "play"){

        }
        console.log(GameState.state);
    }
}

class GameTimer{
    constructor(song){
        GameTimer.frame = 0;
        GameTimer.firstNote = true;
        let mf = new GameManifests;
        GameTimer.loadedChart = mf.chartManifest[song].chart.left;
        GameTimer.loadedRightChart = mf.chartManifest[song].chart.right;

    }
    startTime (song){
        GameTimer.begin = performance.now();
        let cv = new Anim;
        let gameRule = new GameRules;
        new TimingCheck(song,gameRule);

        console.log(GameTimer.loadedChart);
        requestAnimationFrame(frameTimer);
        function frameTimer(){
            GameTimer.frame += 1;
            if (GameTimer.loadedChart[0] < Math.abs((GameTimer.begin - 1794) - performance.now()) && GameTimer.firstNote){
                console.log("first note hit " + performance.now())
                cv.drawNote()
                GameTimer.loadedChart.shift();
                GameTimer.firstNote = false;
            }
            if (GameTimer.loadedChart[0] < Math.abs((GameTimer.begin - 1794) - performance.now())){
                console.log("subsequent notes hit " + Math.abs(GameTimer.begin - performance.now()));
                cv.addNote();
                GameTimer.loadedChart.shift();
            }
            if ((TimingCheck.currentChart[0] + 163) < Math.abs(GameTimer.begin  - performance.now()) ){
                Anim.removeNote("left");
                console.log("timeout recv");
                TimingCheck.currentChart.shift();
                Combo.resetCombo();
            }
            if (GameTimer.loadedRightChart[0] < Math.abs((GameTimer.begin - 1794) - performance.now())){
                console.log("subsequent notes hit " + Math.abs(GameTimer.begin - performance.now()));
                cv.addRightNote();
                GameTimer.loadedRightChart.shift();
            }
            if ((TimingCheck.currentRightChart[0] + 163) < Math.abs(GameTimer.begin  - performance.now()) ){
                Anim.removeNote("right");
                console.log("timeout recv right");
                TimingCheck.currentRightChart.shift();
                Combo.resetCombo();
            }
            requestAnimationFrame(frameTimer);
        }
        
        
    }
    static leftInput (){
        this.left = performance.now() - GameTimer.begin;
        TimingCheck.left(this.left);

    }

    static rightInput (){
        this.right = performance.now() - GameTimer.begin;
        TimingCheck.right(this.right);
    }
}

class TimingCheck{
    constructor(song,gameRule){
        new Combo;
        new Score;
        TimingCheck.currentChart = chart[song].chart.left;
        TimingCheck.currentRightChart = chart[song].chart.right;
        TimingCheck.rule = gameRule;
    }
    static left(timestamp){
        window.setTimeout(function(){document.getElementById("judgeText").style.opacity = 0;},100);
        document.getElementById("judgeText").style.opacity = 1;
        let localChart = this.currentChart;
        if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.perfect){
            document.getElementById("judgeText").innerText = "Perfect!";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("pf " + (timestamp - localChart[0]));
            this.currentChart.shift();
            Combo.addCombo()
            Score.addScore(TimingCheck.rule.perfectScore)
            Anim.removeNote("left");
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.good){
            document.getElementById("judgeText").innerText = "Good";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("gd " + (timestamp - localChart[0]));
            this.currentChart.shift();
            Combo.addCombo();
            Score.addScore(TimingCheck.rule.goodScore)
            Anim.removeNote("left");
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.nice){
            document.getElementById("judgeText").innerText = "Nice";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("ni " + (timestamp - localChart[0]));
            this.currentChart.shift();
            Combo.addCombo();
            Score.addScore(TimingCheck.rule.niceScore)
            Anim.removeNote("left");
        
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.bad){
            document.getElementById("judgeText").innerText = "Bad";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("bd " + (timestamp - localChart[0]));
            this.currentChart.shift();
            Combo.resetCombo();
            Score.addScore(TimingCheck.rule.badScore)
            Anim.removeNote("left");
        
        }else {
            console.log("nothing" + this.currentChart);
            console.log(timestamp - localChart[0]);
            console.log(timestamp);
            document.getElementById("judgeText").innerText = "";
            document.getElementById("judgeText").style.opacity = 0;
        }
}
    static right(timestamp){
        window.setTimeout(function(){document.getElementById("judgeText").style.opacity = 0;},100);
        document.getElementById("judgeText").style.opacity = 1;
        let localChart = this.currentRightChart;
        if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.perfect){
            document.getElementById("judgeText").innerText = "Perfect!";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("pf " + (timestamp - localChart[0]));
            this.currentRightChart.shift();
            Combo.addCombo();
            Score.addScore(TimingCheck.rule.perfectScore)
            Anim.removeNote("right");
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.good){
            document.getElementById("judgeText").innerText = "Good";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("gd " + (timestamp - localChart[0]));
            this.currentRightChart.shift();
            Combo.addCombo();
            Score.addScore(TimingCheck.rule.goodScore)
            Anim.removeNote("right");
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.nice){
            document.getElementById("judgeText").innerText = "Nice";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("ni " + (timestamp - localChart[0]));
            this.currentRightChart.shift();
            Combo.addCombo();
            Score.addScore(TimingCheck.rule.niceScore)
            Anim.removeNote("right");
        
        }else if (Math.abs(timestamp - localChart[0]) < TimingCheck.rule.bad){
            document.getElementById("judgeText").innerText = "Bad";
            document.getElementById("judgeText").style.opacity = 1;
            console.log("bd " + (timestamp - localChart[0]));
            this.currentRightChart.shift();
            Score.addScore(TimingCheck.rule.badScore)
            Combo.resetCombo();
            Anim.removeNote("right");
        
        }else {
            console.log("nothing right" + this.currentRightChart);
            console.log(timestamp - localChart[0]);
            console.log(timestamp);
            document.getElementById("judgeText").innerText = "";
            document.getElementById("judgeText").style.opacity = 0;
        }
    }
}