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

    let hit = false


    for (const p of positions) {
      if (!p.alive) {
        continue
      }

      if (isInsideRect(x, y, p.x, p.y, p.x + IMG_SIZE, p.y + IMG_SIZE)) {
        p.alive = false
        hit = true
      }
    }

    positions = positions
    playSound(hit ? 'hit.mp3' : 'miss.mp3')
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

  const countDeadCockroaches = (positions: Position[]): number => {
    let deadCockroaches = 0
    for (const position of positions) {
      if (position.alive === false) {
        deadCockroaches++
      }
    }

    return deadCockroaches
  }

  $: deadCockroaches = countDeadCockroaches(positions)

  const onNewGame = () => {
    positions = []
    resetCountDown()
  }

  const playSound = (src: string) => {
    const sound = document.createElement('audio')
    sound.src = src
    sound.setAttribute('preload', 'auto')
    sound.setAttribute('controls', 'none')
    sound.style.display = 'none'
    document.body.appendChild(sound)
    sound.play()
  }
</script>

<main on:mousedown={onHammerDown}>
  <span id="countdown">{remainingSeconds}s</span>

  <span id="count-dead">{deadCockroaches}</span>

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
    color: blue;
    font-size: 48px;
  }

  #count-dead {
    color: red;
    font-size: 48px;
  }

  img {
    width: 100px;
    position: absolute;
  }

  * {
    cursor: url("../hammerup.png"), auto;
  }

  *:active {
    cursor: url("../hammerdown.png"), auto;
  }

  main {
    border: solid black 1px;
  }
</style>