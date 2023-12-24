<script>import { readGlobal } from '../helpers/w2k-globals';
import { formatPid } from '../store/desktop.store';
import { ButtonLook } from './button-look.enum';
import Button from './button.svelte';
import ContextMenu from './context-menu.svelte';
import { getMinimizeAnimation } from './taskbar-animation';
import TitleBar from './title-bar.svelte';
import WindowContextItems from './window-context-items.svelte';
export let desktopSlice;
export let next;
export let windowSlice;
let forceAppearActive = false;
let contextMenuPosition = undefined;
$: {
    forceAppearActive = !!contextMenuPosition;
}
</script>

<Button
	id="{formatPid(next.processId, 'taskbar')}"
	class="{formatPid(next.processId)}"
	look="{ButtonLook.TASKBAR_ITEM}"
	active="{forceAppearActive ? true : next.active}"
	icon="{next.titleBarIcon}"
	on:click="{() => {
		if (next.active) {
			windowSlice.internals.minimized$.set('start-minimizing');
		} else {
			desktopSlice.desktop$.internals.actions.activateProgram.next(next.processId);
		}
	}}"
	on:contextmenu="{(event) => {
		contextMenuPosition = contextMenuPosition
			? undefined
			: { x: event.pageX / readGlobal('w2kZoom'), y: event.pageY / readGlobal('w2kZoom') };
	}}"
>
	{next.title}

	<ContextMenu bind:position="{contextMenuPosition}">
		<WindowContextItems windowState="{next}" {windowSlice} {desktopSlice} />
	</ContextMenu>
</Button>

{#if next.minimized === 'minimizing' || next.minimized === 'unminimizing'}
	<TitleBar
		windowState="{next}"
		{desktopSlice}
		{windowSlice}
		class="animate"
		style="{getMinimizeAnimation(next, next.minimized)}"
		title="{next.title}"
		icon="{next.titleBarIcon}"
		showMaximize="{false}"
		showMinimize="{false}"
		showHelp="{false}"
		showClose="{false}"
	/>
{/if}
