<script>import { createEventDispatcher } from 'svelte';
import { isEmptyTileMark, isFlagTileMark, isQuestionTileMark } from '../interfaces';
import { Button } from '@w2k/ui';
const dispatch = createEventDispatcher();
export let tile;
export let cheating = false;
function asCoordinate(tile) {
    return { x: tile.x, y: tile.y };
}
function startFire() {
    dispatch('startFire', asCoordinate(tile));
}
function cancelFire() {
    dispatch('cancelFire', asCoordinate(tile));
}
function fire() {
    dispatch('fire', asCoordinate(tile));
}
function alternativeFire() {
    dispatch('alternativeFire', asCoordinate(tile));
}
function getTileClassList(tile, cheating) {
    const classes = [];
    if (isQuestionTileMark(tile.mark)) {
        classes.push('question-mark');
    }
    else if (isFlagTileMark(tile.mark)) {
        classes.push('flag');
    }
    else if (cheating) {
        classes.push('debug');
    }
    if (tile.revealed) {
        classes.push('revealed');
    }
    if (tile.guessedWrong) {
        classes.push('wrong');
    }
    // Protected styles to avoid information leaking
    if (isEmptyTileMark(tile.mark) && (tile.revealed || cheating)) {
        classes.push(`minesweeper-tile-${tile.value}`);
        if (tile.isMine) {
            classes.push('mine');
        }
    }
    return classes.join(' ');
}
$: tileClass = getTileClassList(tile, cheating);
</script>

<Button
	class="minesweeper-tile custom {tileClass}"
	pressed="{tile.pressed || tile.revealed}"
	disabled="{tile.disabled}"
	appearDisabled="{tile.revealed}"
	selfPress="{false}"
	on:fire="{fire}"
	on:startFire="{startFire}"
	on:alternativeFire="{alternativeFire}"
	on:cancelFire="{cancelFire}"
	style="grid-row: {tile.y + 1}; grid-column: {tile.x + 1};"
/>
