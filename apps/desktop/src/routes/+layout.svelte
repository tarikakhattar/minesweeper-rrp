<script lang="ts">
	import { W2kGlobal } from '@w2k/css';
	import { minesweeperIconLarge } from '@w2k/minesweeper';
	import { Desktop } from '@w2k/ui';
	import { desktopSlice, windowComponents } from '../root-store.js';
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{minesweeperIconLarge}" />
	<title>Minesweeper RRP</title>
	<meta name="Minesweeper" content="Minesweeper RRP" />
</svelte:head>

<W2kGlobal />

<Desktop {desktopSlice} {windowComponents} zoom="{2}">
	<slot />
</Desktop>
