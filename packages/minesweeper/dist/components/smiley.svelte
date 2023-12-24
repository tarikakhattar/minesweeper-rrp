<script>import { Button } from '@w2k/ui';
export let smileyState;
</script>

<div class="ms-smiley {smileyState}">
	<Button on:click aria-label="Restart" class="custom" />
</div>

<style>:global(.click).ms-smiley :global(button) {
  background-image: var(--asset-smiley-click);
}

:global(.lost).ms-smiley :global(button) {
  background-image: var(--asset-smiley-lose);
}

:global(.ongoing).ms-smiley :global(button) {
  background-image: var(--asset-smiley-neutral);
}

:global(.won).ms-smiley :global(button) {
  background-image: var(--asset-smiley-win);
}

.ms-smiley {
  width: 25px;
  height: 25px;
}
.ms-smiley :global(button) {
  --background-image-positon: 4px;
  width: 100%;
  height: 100%;
  border: 0 !important;
  margin: 0 !important;
}
.ms-smiley :global(button:not(.pressed)) {
  box-shadow: -1px -1px var(--win-3d-objects-color-darker-1), inset -1px -1px var(--win-3d-objects-color-darker-1), inset 1px 1px var(--win-3d-objects-color-lighter-2), inset -2px -2px var(--win-3d-objects-color-darker-1), inset 2px 2px var(--win-3d-objects-color-lighter-2) !important;
}
.ms-smiley :global(button.pressed) {
  box-shadow: -1px -1px var(--win-3d-objects-color-darker-1), inset -1px -1px var(--win-3d-objects-color-darker-1), inset 1px 1px var(--win-3d-objects-color-darker-1) !important;
}</style>
