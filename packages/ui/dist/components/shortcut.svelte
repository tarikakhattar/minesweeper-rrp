<script>import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import { ButtonLook, ContextMenu } from '../components';
import { readGlobal } from '../helpers';
import Button from './button.svelte';
import { firable } from './firable.action';
import Image from './image.svelte';
export let shortcutState;
export let grippy;
const dispatch = createEventDispatcher();
let shortcutElement = undefined;
export let shortcutIconElement = undefined;
let dragHandler;
$: transientPosition = { ...shortcutState.position };
function move(position) {
    dispatch('move', position);
}
function drop(position) {
    dispatch('drop', position);
}
onMount(() => {
    if (shortcutElement) {
        dragHandler = grippy.draggable({
            target: shortcutElement,
            listeners: {
                move: (data) => {
                    move(data.cursor.delta);
                },
                moveEnd: (data) => {
                    drop(data.cursor.client);
                },
            },
        });
    }
});
onDestroy(() => {
    dragHandler?.unsubscribe();
});
function spawn() {
    dispatch('spawn', shortcutState.program);
}
function select() {
    dispatch('select', shortcutState.shortcutId);
}
function deleteShortcut() {
    dispatch('delete', shortcutState.shortcutId);
}
function beginRenameShortcut() {
    dispatch('beginRename', shortcutState.shortcutId);
}
function rename(e) {
    const formData = new FormData(e.target);
    dispatch('rename', {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        name: formData.get('name')?.toString() || shortcutState.name,
        shortcutId: shortcutState.shortcutId,
    });
}
function keydown(e) {
    switch (e.key) {
        case 'Enter': {
            spawn();
            break;
        }
        case 'F2': {
            beginRenameShortcut();
            break;
        }
        case 'Delete': {
            deleteShortcut();
            break;
        }
        case 'Escape': {
            dispatch('rename', {
                name: shortcutState.name,
                shortcutId: shortcutState.shortcutId,
            });
            break;
        }
    }
}
function keydownRename(e) {
    if (e.key === 'Escape') {
        dispatch('rename', {
            name: shortcutState.name,
            shortcutId: shortcutState.shortcutId,
        });
    }
}
let contextMenuPosition = undefined;
let pointerMovedDuringClick = false;
</script>

<div
	bind:this="{shortcutElement}"
	id="{'shortcut' + shortcutState.shortcutId}"
	use:firable="{{ draggable: true }}"
	on:contextmenu|stopPropagation="{(event) => {
		contextMenuPosition = contextMenuPosition
			? undefined
			: { x: event.pageX / readGlobal('w2kZoom'), y: event.pageY / readGlobal('w2kZoom') };
	}}"
	aria-label="shortcut"
	role="button"
	tabindex="0"
	on:keydown="{keydown}"
	on:dblclick="{() => {
		spawn();
	}}"
	on:click="{() => {
		if (!pointerMovedDuringClick) {
			select();
		}
	}}"
	on:pointermove="{() => {
		pointerMovedDuringClick = true;
	}}"
	on:pointerdown="{() => {
		pointerMovedDuringClick = false;
	}}"
	class="shortcut"
	class:selected="{shortcutState.selected && !shortcutState.renaming}"
	style:top="{`${transientPosition.y}px`}"
	style:left="{`${transientPosition.x}px`}"
>
	<div class="icon" bind:this="{shortcutIconElement}">
		<Image class="icon" alt="{shortcutState.name}" src="{shortcutState.icon}" />
	</div>
	<div class="shortcut-symbol"></div>
	{#if shortcutState.renaming}
		<form class="title" on:submit|preventDefault="{rename}">
			<!-- svelte-ignore a11y-autofocus -->
			<input
				class="input"
				type="text"
				name="name"
				autofocus
				value="{shortcutState.name}"
				on:keydown|stopPropagation="{keydownRename}"
				on:dblclick|stopPropagation
			/>
		</form>
	{:else}
		<div class="title">
			{shortcutState.name}
		</div>
	{/if}
</div>

<ContextMenu bind:position="{contextMenuPosition}" spawnElement="{shortcutElement}">
	<Button look="{ButtonLook.CONTEXT_MENU_ITEM}" on:click="{() => spawn()}" bold="{true}">
		Open
	</Button>
	<hr />
	<slot />
	{#if $$slots.default}
		<hr />
	{/if}
	<Button look="{ButtonLook.CONTEXT_MENU_ITEM}" on:click="{() => deleteShortcut()}">
		Delete
	</Button>
	<Button look="{ButtonLook.CONTEXT_MENU_ITEM}" on:click="{() => beginRenameShortcut()}">
		Rename
	</Button>
</ContextMenu>
