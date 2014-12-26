window.onload = function(){
            var teller = document.getElementById('teller');
            var app = document.getElementById('app');
            var reset = document.getElementById('reset');
            var time = document.getElementById('time'); 
            var number = localStorage.getItem("number");
            var type = localStorage.getItem("type");
            var interval = 0;
            var getal;
            var play = false;
            time.innerHTML = "Tap to start";
            app.onclick = Tellen;
            function Tellen(typeInput){
                if(type == "tap_amount")
                {
                    if(play == false)
                    {
                        play = true;
                        getal = 0;
                        time.innerHTML = "GO!!";
                    }
                    
                    if(play == true)
                    {
                        if(getal == 0)
                        {
                            stopwatch.start();
                        }
                        if(getal != 0 && getal <= number)
                        {
                            stopwatch.stop();
                            interval += stopwatch.duration();
                            time.innerHTML = interval;
                            teller.innerHTML = getal;
                            stopwatch.start();
                        } 
                         getal++; 
                    }  
                }
                if(type == "tap_seconds")
                {
                    if(play == false)
                    {
                        play = true;
                        getal = 0;
                        time.innerHTML = "GO!!";
                    }
                    
                    if(play == true)
                    {
                        if(getal == 0)
                        {
                            stopwatch.start();
                        }
                        if(getal != 0 && interval <= number)
                        {
                            stopwatch.stop();
                            interval += stopwatch.duration();
                            time.innerHTML = interval;
                            teller.innerHTML = getal;
                            stopwatch.start();
                        } 
                         getal++; 
                    }
                } 
            }
            reset.onclick = ResetGetal;
            function ResetGetal()
            {
                stopwatch.stop();
                time.innerHTML = "Tap to start";
                getal = 0;
                interval = 0;
                teller.innerHTML = getal;
                play = false;
            }
            var stopwatch = new Stopwatch();
            function Stopwatch(){
                var startTime = null; 
                var stopTime = null; 
                var running = false;
                this.start;
                function getTime(){
                    var day = new Date();
                    return day.getTime();
                }
                this.start = function(){
                    if(running == true)
                    {
                        return;
                    }
                    else if(startTime != null)
                    {
                        stopTime = null;
                    }

                    running = true;
                    startTime = getTime();
                }
                this.stop = function(){
                    if(running == false)
                    {
                        return;
                    }
                    stopTime = getTime();
                    running = false;
                }
                this.duration = function(){
                    if(startTime == null || stopTime == null)
                    {
                        return 'Undefined';
                    }
                    else
                    {
                        return (stopTime - startTime)/1000;
                    }
                }
            }
        }
    