<script>import Clock from './clock.svelte';
import Image from './image.svelte';
import { debugIcon } from '../assets/misc';
import StartButton from './start-button.svelte';
import TaskbarSeparator from './taskbar-separator.svelte';
export let desktopSlice;
$: debug$ = desktopSlice.desktop$.internals.debug$;
let startButton;
</script>

<div id="taskbar" class="taskbar panel">
	<StartButton {desktopSlice} bind:startButton />
	<TaskbarSeparator />
	<slot name="taskbar" />
	<div id="taskbar-programs" class="taskbar-programs">
		<slot />
	</div>

	<div id="quickbar" class="quickbar panel inset">
		<slot name="quickbar" />
		{#if $debug$}
			<div class="quickbar-icon"><Image height="{16}" width="{16}" src="{debugIcon}" /></div>
		{/if}
		<Clock />
	</div>
</div>
