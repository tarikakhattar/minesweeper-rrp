<script>export let tabs = {};
export let selected = Object.keys(tabs)[0];
</script>

<div>
	<div class="tablist">
		{#each Object.entries(tabs) as [tabId, { displayName, disabled }]}
			<button
				class="custom tab use-disabled-shadow"
				on:click="{() => (selected = tabId)}"
				{disabled}
				class:active="{selected === tabId}"
			>
				{displayName}
			</button>
		{/each}
	</div>

	<div class="window" role="tabpanel">
		<div class="window-body">
			<slot name="content" tab="{selected}" />
		</div>
	</div>
</div>

<style>.tablist {
  margin: 0;
  display: flex;
  justify-items: space-evenly;
  z-index: 5;
  margin-bottom: -1.12px;
  margin-left: 1px;
  position: relative;
}
.tablist button {
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: none !important;
  box-shadow: none;
}
.tablist button.active {
  margin-bottom: -1.01px;
  box-shadow: inset -1px 0 var(--win-shadow-color), inset 1px 1px var(--win-3d-objects-color-lighter-1), inset -2px 0 var(--win-3d-objects-color-darker-1);
}
.tablist button:not(.active) {
  margin-top: 2px;
  margin-bottom: 0;
  box-shadow: inset -1px 0 var(--win-shadow-color), inset 1px 1px var(--win-3d-objects-color-lighter-1), inset -2px 0 var(--win-3d-objects-color-darker-1);
}</style>
