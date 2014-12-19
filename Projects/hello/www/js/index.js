window.onload = function(){
            var teller = document.getElementById('teller');
            var app = document.getElementById('app');
            var reset = document.getElementById('reset'); 
            var getal = 0;
            app.onclick = Tellen;
            function Tellen(){
                getal++;
                teller.innerHTML = getal;
            }
            reset.onclick = Reset;
            function Reset()
            {
                getal = "0";
                teller.innerHTML = getal;
            }
            
        };