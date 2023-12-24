<script>import { createEventDispatcher } from 'svelte';
export let color;
const dispatch = createEventDispatcher();
</script>

<button class="custom" on:click="{() => dispatch('select', color)}">
	<div class="color" style="background-color: rgb({color.r} {color.g} {color.b});"></div>
</button>

<style>button:not(:hover) {
  box-shadow: inset -1px -1px var(--win-3d-objects-color-lighter-2), inset 1px 1px var(--win-3d-objects-color-darker-1), inset -2px -2px var(--win-3d-objects-color), inset 2px 2px var(--win-shadow-color);
}
button:hover {
  border: 1px solid white;
  outline: 1px solid black;
  outline-offset: 0;
  padding: 0;
  box-shadow: inset -1px -1px black, inset 1px 1px black;
}

.color {
  box-sizing: border-box;
  width: 17.24px;
  height: 17.24px;
  margin: 0.88px;
  margin-right: 1px;
  margin-bottom: 1px;
}</style>
