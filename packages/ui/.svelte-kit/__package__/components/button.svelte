<script>import { isNotNullish } from '@alexaegis/common';
import { documentPointerUp$ } from '@w2k/core';
import { createEventDispatcher, onDestroy } from 'svelte';
import { ButtonLook } from './button-look.enum';
import Image from './image.svelte';
const dispatch = createEventDispatcher();
export let disabled = false;
export let appearDisabled = false;
export let pressed = false;
export let longpressTime = 275;
export let type = 'button';
export let look = undefined;
export let icon = undefined;
export let label = undefined;
export let title = undefined;
export let bold = false;
export let id = undefined;
export let selfPress = true;
export let hotkeyLetter = undefined;
export let active = undefined;
let longpressHappened = false;
let cancelHappened = false;
let mouseUpListener;
let firing = false;
export let button = undefined;
if (selfPress) {
    mouseUpListener = documentPointerUp$.subscribe(() => {
        pressed = false;
        cancelLongpress();
    });
}
function pointerdown(event) {
    longpressHappened = false;
    cancelHappened = false;
    firing = true;
    if (event.button === 0 || event.button === 1 || event.pointerType === 'touch') {
        startFire();
        longpress();
        if (selfPress) {
            pressed = true;
        }
    }
    dispatch('pointerdown', event);
}
function pointerup(e) {
    if (firing && !longpressHappened && !cancelHappened) {
        cancelLongpress();
        if (e.button === 0 || e.button === 1) {
            fire();
            if (selfPress) {
                pressed = true;
            }
        }
        else if (e.button === 2) {
            alternativeFire();
            if (selfPress) {
                pressed = true;
            }
        }
    }
}
function longpress() {
    longpressTimeout = window.setTimeout(() => {
        if (!longpressHappened && !cancelHappened) {
            longpressHappened = true;
            cancelLongpress();
            alternativeFire();
        }
    }, longpressTime);
}
let longpressTimeout;
function cancelLongpress() {
    firing = false;
    if (isNotNullish(longpressTimeout)) {
        window.clearTimeout(longpressTimeout);
        longpressTimeout = undefined;
    }
}
function pointerleave() {
    if (firing) {
        cancelFire();
    }
}
function startFire() {
    if (!disabled) {
        dispatch('startFire');
    }
}
function fire() {
    firing = false;
    if (!disabled) {
        dispatch('fire');
        cancelLongpress();
    }
}
function alternativeFire() {
    firing = false;
    if (!disabled) {
        dispatch('alternativeFire');
        cancelLongpress();
    }
}
function cancelFire() {
    firing = false;
    if (!disabled && pressed && !cancelHappened) {
        cancelHappened = true;
        cancelLongpress();
        dispatch('cancelFire');
    }
}
onDestroy(() => {
    if (mouseUpListener) {
        mouseUpListener.unsubscribe();
    }
});
</script>

<button
	bind:this="{button}"
	{id}
	{type}
	{disabled}
	{title}
	aria-label="{$$props['aria-label']}"
	class="{$$props['class'] ?? ''}"
	class:outset="{!pressed}"
	class:inset="{pressed}"
	style="{$$props['style'] ?? ''}"
	class:disabled="{disabled || appearDisabled}"
	class:hotkey-letter="{!!hotkeyLetter}"
	class:active
	class:selfPress
	class:pressed
	class:bold
	class:flat="{look === ButtonLook.CONTEXT_MENU_ITEM ||
		look === ButtonLook.START_MENU_ITEM ||
		look === ButtonLook.TITLE_BAR_MENU_ITEM}"
	class:type-none="{look === undefined}"
	class:type-thick="{look === ButtonLook.THICK}"
	class:type-taskbar-item="{look === ButtonLook.TASKBAR_ITEM}"
	class:type-title-bar-menu-item="{look === ButtonLook.TITLE_BAR_MENU_ITEM}"
	class:type-context-menu-item="{look === ButtonLook.CONTEXT_MENU_ITEM}"
	class:type-start-menu-item="{look === ButtonLook.START_MENU_ITEM}"
	on:click
	on:mouseup
	on:mousedown
	on:mouseenter
	on:dblclick
	on:contextmenu|preventDefault|stopPropagation
	on:pointercancel
	on:pointerenter
	on:pointerup="{pointerup}"
	on:pointerdown="{pointerdown}"
	on:pointerleave="{pointerleave}"
>
	{#if look === ButtonLook.CONTEXT_MENU_ITEM}
		<Image height="{16}" width="{16}" src="{icon}"></Image>
		<span>
			<slot />
		</span>
	{:else if look === ButtonLook.TASKBAR_ITEM}
		<span class="taskbar-button-icon">
			<Image height="{16}" width="{16}" src="{icon}" alt="{label}" />
		</span>

		<span>
			<slot />
		</span>
	{:else}
		<slot />
	{/if}
</button>

<style>button {
  background-position-x: var(--background-image-positon, 1px);
  background-position-y: var(--background-image-positon, 1px);
}
button.pressed:not(.fixmeselector) {
  background-position-x: calc(var(--background-image-positon, 1px) + 1px);
  background-position-y: calc(var(--background-image-positon, 1px) + 1px);
}</style>
