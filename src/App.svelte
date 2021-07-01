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

  let remainingSeconds = 10

  const setFullscreenSize = () => {
    document.getElementsByTagName('main')[0].style.width = `${window.innerWidth}px`
    document.getElementsByTagName('main')[0].style.height = `${window.innerHeight}px`
  }

  const addCockroach = () => {
    if (remainingSeconds === 0) {
      return
    }

    const x = Math.random() * window.innerWidth - IMG_SIZE
    const y = Math.random() * window.innerHeight - IMG_SIZE
    const pos = {alive: true, x, y}
    positions = [...positions, pos]
  }

  setInterval(() => {
    setFullscreenSize()
    addCockroach()
  }, 2000)

  const isInsideRect = (x: number, y: number, left: number, top: number, right: number, bottom: number): boolean => {
    return left < x && x < right && top < y && y < bottom
  }

  const onHammerDown = (event: MouseEvent) => {
    if (remainingSeconds === 0) {
      return
    }

    const x = event.x
    const y = event.y

    for (const p of positions) {
      if (!p.alive) {
        continue
      }

      if (isInsideRect(x, y, p.x, p.y, p.x + IMG_SIZE, p.y + IMG_SIZE)) {
        p.alive = false
      }
    }

    positions = positions
  }

  const countDown = () => {
    remainingSeconds--

    if (remainingSeconds > 0) {
      setTimeout(countDown, 1000)
    }
  }

  const resetCountDown = () => {
    remainingSeconds = 10
    countDown()
  }
  resetCountDown()

  const onNewGame = () => {
    positions = []
    resetCountDown()
  }

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
    this.stop = function() {
      this.sound.pause();
    }
  }
</script>

<main on:mousedown={onHammerDown}>
  <span id="countdown">{remainingSeconds}</span>

  {#if remainingSeconds === 0} 
    <button on:click={onNewGame}>New Game</button>  
  {/if}

  {#each positions as pos}
    <img 
      alt={pos.alive ? 'Alive' : 'Dead'}
      src={pos.alive ? 'alive.png' : 'dead.png'}
      style="left: {pos.x}px; top: {pos.y}px;"
    />
  {/each}
</main>

<style>
  #countdown {
    color: red; 
    font-size: 48px;
  }

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