<script>export let name;
export let options;
export let value = undefined;
export let disabled = false;
</script>

<select
	{name}
	id="{name}"
	bind:value
	{disabled}
	class="{$$props['class'] ?? ''}"
	style="{$$props['style'] ?? ''}"
>
	{#each Object.keys(options) as optionKey}
		<option value="{optionKey}">{options[optionKey]}</option>
	{/each}
</select>
