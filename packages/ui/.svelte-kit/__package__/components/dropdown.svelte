<script>import { ButtonLook } from './button-look.enum';
import Button from './button.svelte';
import ContextMenu from './context-menu.svelte';
export let title;
export let hotkeyLetter = undefined;
export let active;
let justActivated = true;
let button;
function pointerenter(event) {
    if (event.pointerType === 'mouse' && active !== undefined && active !== title) {
        active = title;
        justActivated = false;
    }
}
function click(_event) {
    active = active === title ? undefined : title;
    justActivated = true;
}
</script>

<Button
	bind:button
	look="{ButtonLook.TITLE_BAR_MENU_ITEM}"
	active="{active === title}"
	on:pointerenter="{pointerenter}"
	on:click="{click}"
	{hotkeyLetter}
>
	{title}

	{#if active === title}
		<ContextMenu
			position="{button.getBoundingClientRect()}"
			xAxisAnimated="{false}"
			yAxisAnimated="{justActivated}"
			spawnElement="{button}"
			on:dismiss="{() => {
				active = undefined;
			}}"
		>
			<slot />
		</ContextMenu>
	{/if}
</Button>
