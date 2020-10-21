  (function() {
    //multiple functions use these variabless
    var canvas;
    var ctx;
    var snake;
    var snake_dir;
    var snake_next_dir;
    var snake_speed;
    var food = {
      x: 0,
      y: 0
    };
    var score;
    var wall;
    var screen_snake;
    var screen_menu;
    var screen_setting;
    var screen_gameover;
    var button_newgame_menu;
    var button_newgame_setting;
    var button_newgame_gameover;
    var button_setting_menu;
    var button_setting_gameover;
    var ele_score;
    var speed_setting;
    var wall_setting;
    const pixel_size = 20;

    function snakeDot(x, y) {
      ctx.fillStyle = "#00FF00";
      ctx.fillRect(x * pixel_size, y * pixel_size, pixel_size, pixel_size);
    }

    function foodDot(x, y) {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(x * pixel_size, y * pixel_size, pixel_size, pixel_size);
    }

    function changeDir(key) {
      if (key == 38 && snake_dir != 2) snake_next_dir = 0;
      else if (key == 39 && snake_dir != 3) snake_next_dir = 1;
      else if (key == 40 && snake_dir != 0) snake_next_dir = 2;
      else if (key == 37 && snake_dir != 1) snake_next_dir = 3;
    }

    function addFood() {
      food.x = Math.floor(Math.random() * ((canvas.width / pixel_size) - 1));
      food.y = Math.floor(Math.random() * ((canvas.height / pixel_size) - 1));
      for (var i = 0; i < snake.length; i++)
        if (checkBlock(food.x, food.y, snake[i].x, snake[i].y)) addFood();
    }

    function checkBlock(x, y, _x, _y) {
      return (x == _x && y == _y) ? true : false;
    }

    function displayScore(score_val) {
      ele_score.innerHTML = String(score_val);
    }

    function main() {
      var _x = snake[0].x;
      var _y = snake[0].y;
      snake_dir = snake_next_dir;
      switch (snake_dir) {
        case 0:
          _y--;
          break;
        case 1:
          _x++;
          break;
        case 2:
          _y++;
          break;
        case 3:
          _x--;
          break;
      }
      snake.pop();
      snake.unshift({
        x: _x,
        y: _y
      });
      if (wall == 1) {
        if (snake[0].x < 0 || snake[0].x > canvas.width / pixel_size || snake[0].y < 0 || snake[0].y > canvas.height / pixel_size) {
          showScreen(3);
          return;
        }
      } else {
        for (var i = 0, x = snake.length; i < x; i++) {
          if (snake[i].x < 0) snake[i].x = snake[i].x + (canvas.width / pixel_size);
          if (snake[i].x == canvas.width / pixel_size) snake[i].x = snake[i].x - (canvas.width / pixel_size);
          if (snake[i].y < 0) snake[i].y = snake[i].y + (canvas.height / pixel_size);
          if (snake[i].y == canvas.height / pixel_size) snake[i].y = snake[i].y - (canvas.height / pixel_size);
        }
      }
      for (var i = 1; i < snake.length; i++)
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
          showScreen(3);
          return;
        }
      if (checkBlock(snake[0].x, snake[0].y, food.x, food.y)) {
        snake[snake.length] = {
          x: snake[0].x,
          y: snake[0].y
        };
        score += 1;
        displayScore(score);
        addFood();
        foodDot(food.x, food.y);
      }
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < snake.length; i++) snakeDot(snake[i].x, snake[i].y);
      foodDot(food.x, food.y);
      setTimeout(main, snake_speed);
    }

    function newGame() {
      showScreen(0);
      screen_snake.focus();
      snake = [];
      let x_i = Math.floor((canvas.width / pixel_size) - 1) / 2;
      let y_i = Math.floor((canvas.height / pixel_size) - 1) / 2;
      for (var i = 4; i >= 0; i--) snake.push({
        x: x_i + i,
        y: y_i
      });
      snake_next_dir = 1;
      score = 0;
      displayScore(score);
      addFood();
      canvas.onkeydown = function(evt) {
        evt = evt || window.event;
        changeDir(evt.keyCode);
      }
      main();
    }

    function setSnakeSpeed(speed_value) {
      snake_speed = speed_value;
    }

    function setWall(wall_value) {
      wall = wall_value;
      if (wall == 0) screen_snake.style.borderColor = "#606060";
      if (wall == 1) screen_snake.style.borderColor = "#FFFFFF";
    }

    function reduce(i) {
      return (i - i % pixel_size);
    }

    function showScreen(screen_opt) {
      switch (screen_opt) {
        case 0: //game
          screen_snake.style.display = "block";
          canvas.width = reduce(canvas.offsetWidth);
          canvas.height = reduce(canvas.offsetHeight); //constant
          screen_menu.style.display = "none";
          screen_setting.style.display = "none";
          screen_gameover.style.display = "none";
          break;
        case 1: //main menu
          screen_snake.style.display = "none";
          screen_menu.style.display = "block";
          screen_setting.style.display = "none";
          screen_gameover.style.display = "none";
          break;
        case 2: //settings
          screen_snake.style.display = "none";
          screen_menu.style.display = "none";
          screen_setting.style.display = "block";
          screen_gameover.style.display = "none";
          break;
        case 3: //game over
          screen_snake.style.display = "none";
          screen_menu.style.display = "none";
          screen_setting.style.display = "none";
          screen_gameover.style.display = "block";
          console.log("This is the current sessions snake score: \n", score);
          //ajax score out.
          function submitScore() {
            $.get("/api/users/sessionID").then(function(user_id) {
              $.post("/api/submit_score", {
                game_name: "snake",
                sessionScore: score,
                userId: user_id
              }, function(resp) {});
            });
          };
          submitScore();
      }
    }
    window.onload = function() {
      canvas = document.getElementById("snake");
      ctx = canvas.getContext("2d");
      screen_snake = document.getElementById("snake");
      screen_menu = document.getElementById("menu");
      screen_gameover = document.getElementById("gameover");
      screen_setting = document.getElementById("setting");
      button_newgame_menu = document.getElementById("newgame_menu");
      button_newgame_setting = document.getElementById("newgame_setting");
      button_newgame_gameover = document.getElementById("newgame_gameover");
      button_setting_menu = document.getElementById("setting_menu");
      button_setting_gameover = document.getElementById("setting_gameover");
      ele_score = document.getElementById("score_value");
      speed_setting = document.getElementsByName("speed");
      wall_setting = document.getElementsByName("wall");
      button_newgame_menu.onclick = () => newGame();
      button_newgame_gameover.onclick = () => newGame();
      button_newgame_setting.onclick = () => newGame();
      button_setting_menu.onclick = () => showScreen(2);
      button_setting_gameover.onclick = () => showScreen(2);
      setSnakeSpeed(100);
      setWall(1);
      showScreen("menu");
      for (var i = 0; i < speed_setting.length; i++) speed_setting[i].addEventListener("click", function() {
        for (var i = 0; i < speed_setting.length; i++)
          if (speed_setting[i].checked) setSnakeSpeed(speed_setting[i].value);
      });
      for (var i = 0; i < wall_setting.length; i++) wall_setting[i].addEventListener("click", function() {
        for (var i = 0; i < wall_setting.length; i++)
          if (wall_setting[i].checked) setWall(wall_setting[i].value);
      });
      document.onkeydown = function(event) {
        if (screen_gameover.style.display == "block") {
          event = event || window.event;
          if (event.keyCode == 32) newGame();
        }
      }
    }
  })();