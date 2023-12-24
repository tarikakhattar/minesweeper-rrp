<script>export let area;
</script>

{#if area}
	<div
		class="selection"
		style:top="{`${area.y}px`}"
		style:left="{`${area.x}px`}"
		style:width="{`${area.width}px`}"
		style:height="{`${area.height}px`}"
	></div>
{/if}
