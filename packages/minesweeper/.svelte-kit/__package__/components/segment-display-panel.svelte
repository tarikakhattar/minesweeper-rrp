<script>import SegmentDisplay from './seven-segment-display.svelte';
import './segment-display.scss';
export let value;
export let paddedLength = 3;
let numbers;
function padArray(array, until, padding) {
    while (array.length < until) {
        array.unshift(padding);
    }
    return array;
}
$: {
    numbers = padArray([...Math.abs(value ?? 0).toString()].map((s) => Number.parseInt(s, 10)), paddedLength, 0);
    if ((value ?? 0) < 0) {
        numbers[0] = '-';
    }
}
</script>

<div class="segment-display panel inset">
	{#each numbers as number}
		<SegmentDisplay value="{number}" />
	{/each}
</div>

<style>
	.segment-display {
		display: flex;
		background-color: black;
	}
</style>
