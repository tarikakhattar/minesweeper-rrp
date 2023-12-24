<script>export let alt = undefined;
export let src = undefined;
export let disabled = false;
export let height = undefined;
export let width = undefined;
</script>

{#if src}
	<img
		class="{$$props['class'] ?? ''}"
		style="{$$props['style'] ?? ''}"
		style:height="{height ? `${height}px` : undefined}"
		style:width="{width ? `${width}px` : undefined}"
		style:min-height="{height ? `${height}px` : undefined}"
		style:min-width="{width ? `${width}px` : undefined}"
		draggable="{false}"
		aria-label="{alt}"
		{src}
		{alt}
		class:disabled
	/>
{:else}
	<div
		style:height="{height ? `${height}px` : undefined}"
		style:width="{width ? `${width}px` : undefined}"
		style:min-height="{height ? `${height}px` : undefined}"
		style:min-width="{width ? `${width}px` : undefined}"
	></div>
{/if}
