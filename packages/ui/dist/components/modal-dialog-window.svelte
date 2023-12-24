<script>import { defer } from '@w2k/common';
import { onDestroy } from 'svelte';
import { nudgeAreaIntoArea } from '../helpers/nudge-area-into-area.function';
import { centerRectangleIntoRectancle, getWorkspaceRectangle } from '../store';
import Modal from './modal.svelte';
import { initialWindowState } from './window-state.interface';
import Window from './window.svelte';
export let windowState;
$: effectiveWindowState = {
    ...initialWindowState,
    ...windowState,
    showMinimize: false,
    active: true,
};
export let isOpen = false;
let modalWindowElement;
let errorNotification;
export function open(centeringElement) {
    windowState.invisible = true;
    isOpen = true;
    const centerElement = centeringElement ?? document.body;
    // Let the modal window mount before calculating center
    const centerElementRect = centerElement.getBoundingClientRect();
    const workspaceRectangle = getWorkspaceRectangle();
    defer(() => {
        windowState.position = centerRectangleIntoRectancle(effectiveWindowState, centerElementRect);
        if (workspaceRectangle && modalWindowElement) {
            const windowRectangle = modalWindowElement.getBoundingClientRect();
            windowState.position = nudgeAreaIntoArea({
                ...windowState.position,
                height: windowRectangle.height,
                width: windowRectangle.width,
            }, workspaceRectangle);
        }
        windowState.invisible = false;
    })();
}
export function close(_event) {
    // Let stuff clear itself
    defer(() => {
        isOpen = false;
    })();
}
export function backdropClick(event) {
    if (event.target.className.includes('modal')) {
        errorNotification.next();
    }
}
onDestroy(() => {
    errorNotification?.complete();
});
</script>

<Modal bind:isOpen backdropCanClose="{false}" on:error="{() => errorNotification?.next(undefined)}">
	<Window
		bind:windowElement="{modalWindowElement}"
		windowState="{effectiveWindowState}"
		transient="{true}"
		canDeactivate="{false}"
		on:close="{close}"
		bind:errorNotification
	>
		<slot />
	</Window>
</Modal>
