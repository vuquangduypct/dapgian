<script lang="ts">
  const IMG_SIZE = 100

  type Position = {
    alive: boolean
    x: number
    y: number
  }

  let positions: Position[] = [
    {alive: true, x: 10, y: 120}, 
    {alive: false, x: 100, y: 200}
  ]

  setInterval(() => {
    document.getElementsByTagName('main')[0].style.width = `${window.innerWidth}px`
    document.getElementsByTagName('main')[0].style.height = `${window.innerHeight}px`

    const x = Math.random() * window.innerWidth - IMG_SIZE
    const y = Math.random() * window.innerHeight - IMG_SIZE
    const pos = {alive: true, x, y}
    positions = [...positions, pos]
  }, 2000)

  let isHitted = false
  // if (isHitted === true) {
  //   'alive.png' = 'dead.png'
  // }

  let newGame = false
  if (timeleft === 0) {
    // counter_list.display
  }

  var timeleft = 10;
  var downloadTimer = setInterval(() => {
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    
  }, 1000)

  var counter_list = [10,10000,10000];
  var str_counter_0 = counter_list[0];
  var str_counter_1 = counter_list[1];
  var str_counter_2 = counter_list[2];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count) {
    setInterval(function() {
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      if (str_counter_0 > 99) {
        str_counter_0 = 10; // reset count
        str_counter_1++;    // increase next count
      }
      if(str_counter_1>99999){
        str_counter_2++;
      }
      display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    }, 1000);
  
    function sound(src) {
      this.sound = document.createElement("audio");
      this.sound.src = src;
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
      this.play = function(){
        this.sound.play();
      }
      this.stop = function(){
      this.sound.pause();
      }
    }
  }
</script>

<main>
  {#each positions as pos}
    <img 
      alt={pos.alive ? 'Alive' : 'Dead'}
      src={pos.alive ? 'alive.png' : 'dead.jpg'}
      style="left: {pos.x}px; top: {pos.y}px;"
    />
  {/each}

  <button onclick={() => newGame = true}>New Game</button>
</main>

<style>
  img {
    width: 100px;
    position: absolute;
  }

  * {
    cursor: url("/hammerup.png"), auto;
  }

  *:active {
    cursor: url("/hammerdown.png"), auto;
  }

  main {
    border: solid black 1px;
  }
</style>