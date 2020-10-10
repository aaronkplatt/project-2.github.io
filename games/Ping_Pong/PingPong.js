var ballInterval = {}; 

//Ball movement functions
function initMovement() 
{
    var speed = 100;
    var ballHeight = parseInt(window.getComputedStyle(document.getElementById('ball')).getPropertyValue('height'),10);
    var terrainHeight = parseInt(window.getComputedStyle(document.getElementById('terrain')).getPropertyValue('height'),10);
    var playerTop = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('top'),10);
    var playerHeight = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('height'),10);
    var ballSize = parseInt(window.getComputedStyle(document.getElementById('ball')).getPropertyValue('width'),10);
    var wallLeft = parseInt(window.getComputedStyle(document.getElementById('wall')).getPropertyValue('left'),10);
    var playerLeft = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('left'),10);
    var playerWidth = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('width'),10);
    var angleD = Math.round(Math.random() * 180)-90;
    while(angleD > 45 || angleD < -45 || angleD == 0)
    {
       angleD = Math.round(Math.random() * 180)-90; 
    }
    var angle = (Math.PI / 180) * angleD;
    var ballLeft = playerLeft + playerWidth;
    var ballTop = playerTop + (playerHeight/2);
    var loopcounter = 0;
    
    ballInterval = setInterval(function()
    {
        ballLeft +=  ((Math.cos(angle)*speed)/100);
        ballTop -= ((Math.sin(angle)*speed)/100);
        document.getElementById("ball").style.left = ballLeft+"px";
        document.getElementById("ball").style.top = ballTop+"px";
        var playerTop = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('top'),10);
        var playerBottom = playerTop + parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('height'),10);
        var ballBottom = ballTop + parseInt(window.getComputedStyle(document.getElementById('ball')).getPropertyValue('height'),10);
        
        if(ballLeft > (wallLeft-ballSize)-speed/100) 
        {
            document.getElementById("ball").style.left = wallLeft-ballSize;
            speed = -speed;
            angle = -angle;
        }
        if(ballLeft < (playerLeft + playerWidth - speed/100)) 
        {
            if ((ballTop>=playerTop && ballTop < playerBottom)||(ballBottom<=playerBottom && ballBottom>playerTop))
            {
            document.getElementById("ball").style.left = playerLeft + playerWidth;
            loopcounter++;
            document.getElementById("score").innerHTML = loopcounter;
            speed = -(speed - 20);
            angle = -angle;
            }
            else 
            {
                 if(ballLeft < - 4*ballSize)
                 {
                     alert("You have " + loopcounter.toString() + " points" );
                     clearInterval(ballInterval);
                     document.getElementById("start").disabled = false;
                     document.getElementById("stop").disabled = true;
                     document.getElementById("score").innerHTML = 0;
                     if(loopcounter.toString() > document.getElementById("highscore").innerHTML)
                     {
                         document.getElementById("highscore").innerHTML = loopcounter.toString();
                     }
                 }
            }
        }
        if(ballTop < Math.abs(speed/100))
        {
         document.getElementById("ball").style.top = 0;
         angle = -angle
        }
        if(ballTop > (terrainHeight - ballHeight - Math.abs(speed/100)))
        {
         document.getElementById("ball").style.top  = terrainHeight - ballHeight;
         angle = -angle
        }
    },10);
}

//Setup functions
function start() 
{
    initMovement();
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}    
function stop() 
{
    clearInterval(ballInterval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

//Command functions
function control()
{
    var up = document.getElementById("up"),
        down = document.getElementById("down"),
        playerTop = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('top'),10);
        speed2 = 50,
        upInterval = {}, downInterval = {};
        playerHeight = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('height'),10);
        terrainHeight = parseInt(window.getComputedStyle(document.getElementById('terrain')).getPropertyValue('height'),10);

    up.onmousedown = function(){
    {
        upInterval = setInterval(function(){
         if (playerTop > speed2/10)
        {
        playerTop -= speed2/10;
        document.getElementById("player").style.top = playerTop+"px";
        } else 
        {
            playerTop = 0; 
            document.getElementById("player").style.top = playerTop+"px";
            clearInterval(upInterval)
        }
    }, 30);
    }
    };

    up.onmouseup = function(){
        clearInterval(upInterval);
    };

    down.onmousedown = function(){
        
        downInterval = setInterval(function(){
        if (playerTop < (terrainHeight-playerHeight-speed2/10))
        {
            playerTop += speed2/10;
            document.getElementById("player").style.top = playerTop+"px";
        } else
        {
            playerTop = terrainHeight - playerHeight;
            document.getElementById("player").style.top = playerTop+"px";
            clearInterval(downInterval);
        }
           
        }, 30);
    };
    
    down.onmouseup = function(){
        clearInterval(downInterval);
    };
}   

// Commands using keyboard arrows
document.onkeydown = checkKeycode;

function checkKeycode(event) {
    // handling Internet Explorer with window.event
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

    print_arrow_key(keycode);

    return false;
}

function print_arrow_key(keyCodeNumber) {
    var key_arrow_or_other = document.getElementById('key_arrow_or_other'),
        UP = 38,
        DOWN = 40;
        playerTop = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('top'),10);
        speed2 = 100;
        upInterval = {}, downInterval = {};
        playerHeight = parseInt(window.getComputedStyle(document.getElementById('player')).getPropertyValue('height'),10);  terrainHeight = parseInt(window.getComputedStyle(document.getElementById('terrain')).getPropertyValue('height'),10);


    switch (keyCodeNumber) {
    case UP:
        playerTop -= speed2/10
        document.getElementById("player").style.top = playerTop+"px";;
        break;
    case DOWN:
        playerTop += speed2/10
        document.getElementById("player").style.top = playerTop+"px";;
        break;
    }
}