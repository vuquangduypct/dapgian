<script lang="ts">
import { each } from "svelte/internal";


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
    const x = Math.random() * 200
    const y = Math.random() * 200
    const pos = {alive: true, x, y}
    positions = [...positions, pos]
  }, 2000)
</script>

<main>
  {#each positions as pos}
    <img 
      alt={pos.alive ? 'Alive' : 'Dead'}
      src={pos.alive ? 'alive.png' : 'dead.jpg'}
      style="left: {pos.x}px; top: {pos.y}px;"
    />
  {/each}
</main>

<style>
  img {
    width: 100px;
    position: absolute;
  }
</style>